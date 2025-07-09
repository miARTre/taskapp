require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.findByIdAndDelete("686e3b387b271313a2702e21")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((incomplete) => {
//     console.log("Incomplete tasks:", incomplete);
//   })
//   .catch((e) => console.log(e));

const deleteTaskAndCount = async (id) => {
  const deleteTask = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("686e649853c4670cee124f17")
  .then((count) => console.log("count is:", count))
  .catch((e) => console.log("error:", e));
