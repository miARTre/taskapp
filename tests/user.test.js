require("dotenv").config({ path: "./src/config/.env" });
const request = require("supertest");
const app = require("../src/app");

test("should first", async () => {
  await request(app).post("/users").send({
    name: "Mire Test",
    email: "mirnesbb@gmail.com",
    password: "MyPass777!",
  }).expect(201);
});
