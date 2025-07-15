require("dotenv").config({ path: "./src/config/test.env" });
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../src/models/user");
const request = require("supertest");
const app = require("../src/app");
jest.mock("@sendgrid/mail", () => ({
  setApiKey: jest.fn(),
  send: jest.fn().mockResolvedValue([{ statusCode: 202 }]),
}));

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: "Test User",
  email: "test@test.com",
  password: "12345what",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("should singup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Mire Test",
      email: "test1@test.com",
      password: "MyPass777!",
    })
    .expect(201);

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assertions about the response
  expect(response.body).toMatchObject({
    user: {
      name: "Mire Test",
      email: "test1@test.com",
    },
    token: user.tokens[0].token,
  });

  expect(user.password).not.toBe("MyPass777!");

  // expect(response.body.user.name).toBe("Mire Test")
});

test("should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});

test("should return error for wrong login credentials", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "randomPass",
    })
    .expect(401);
});

test("should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("should not get profile for unauthenticated user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

test("should delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

test("should not delete account for user", async () => {
  await request(app).delete("/users/me").send().expect(401);
});

afterAll(async () => {
  await mongoose.connection.close();
});
