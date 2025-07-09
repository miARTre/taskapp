require("../src/db/mongoose");
 
const Task = require("../src/models/task");

Task.findByIdAndDelete("686e3b387b271313a2702e21")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((incomplete) => {
    console.log("Incomplete tasks:", incomplete);
  })
  .catch((e) => console.log(e));
