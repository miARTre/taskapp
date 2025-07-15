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

test("should first", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Mire Test",
      email: "mirnesbb@gmail.com",
      password: "MyPass777!",
    })
    .expect(201);
});

test("should login existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "test@test.com",
      password: "12345what",
    })
    .expect(200);
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
});

test("should not delete account for user", async () => {
  await request(app).delete("/users/me").send().expect(401);
});
