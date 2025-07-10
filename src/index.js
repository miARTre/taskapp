const express = require("express");
require("./db/mongoose");
const userRouter = require("../src/routers/user");
const taskRouter = require("../src/routers/task");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log("Server run on PORT:", PORT);
});

const bcrypt = require("bcryptjs");

const myFun = async () => {
  const password = "Red1234!";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare('red1234!', hashedPassword);
  console.log(isMatch)
};

myFun();
