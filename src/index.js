require("dotenv").config({ path: "./src/config/.env" });
const express = require("express");
require("./db/mongoose");
const userRouter = require("../src/routers/user");
const taskRouter = require("../src/routers/task");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log("Server run on PORT:", process.env.PORT);
});
