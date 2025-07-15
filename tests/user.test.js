require("dotenv").config({ path: "./src/config/test.env" });
const User = require("../src/models/user");
const request = require("supertest");
const app = require("../src/app");

const UserOne = {
  name: "Test User",
  email: "test@test.com",
  password: "12345what",
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(UserOne).save();
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
      email: UserOne.email,
      password: "randomPass",
    })
    .expect(401);
});
