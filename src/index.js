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

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById('686fc709defa05b4d43f8357');
  // await task.populate('owner');
  // console.log(task.owner)

  const user = await User.findById("686fc700defa05b4d43f8349");
  await user.populate('tasks')
  console.log(user.tasks)
};

main();
