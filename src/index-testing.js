const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();

const PORT = process.env.PORT || 3000;

  // Middleware
  
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("The site in under maintance, please try back soon!");
// });

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }

  // user
  //   .save()
  //   .then((user) => {
  //     res.status(201).send(user);
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e);
  //   });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }

  // User.find({})
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch((e) => {
  //     res.status(500);
  //   });
});

app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const userById = await User.findById(_id);
    if (!userById) {
      return res.status(404).send();
    }
    res.send(userById);
  } catch (e) {
    res.status(500).send(e);
  }

  //   console.log(req.params);
  //   console.log(req.params.id);
  // const _id = req.params.id;

  // User.findById(_id)
  //   .then((user) => {
  //     if (!user) {
  //       return res.status(404).send();
  //     }
  //     res.send(user);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }

  // task
  //   .save()
  //   .then((task) => res.status(201).send(task))
  //   .catch((e) => res.status(400).send(e));
});

app.get("/tasks", async (req, res) => {
  try {
    const task = await Task.find({});
    res.send(task);
  } catch (e) {
    res.send(500).send(e);
  }

  // Task.find({})
  //   .then((tasks) => res.status(200).send(tasks))
  //   .catch((e) => res.status(500).send());
});

app.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }

  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) {
  //       return res.status(404).send();
  //     }
  //     res.send(task);
  //   })
  //   .catch((e) => res.status(500).send());
});

app.listen(PORT, () => {
  console.log("Server run on PORT:", PORT);
});

// const bcrypt = require("bcryptjs");

// const myFun = async () => {
// const password = "Red1234!";
// const hashedPassword = await bcrypt.hash(password, 8);

// console.log(password);
// console.log(hashedPassword);

// const isMatch = await bcrypt.compare('red1234!', hashedPassword);
// console.log(isMatch)
// };

// myFun();

// const jwt = require("jsonwebtoken");

// const myFun = async (params) => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcoruse", {expiresIn: '7 days'});
//   console.log(token);

//   const data = jwt.verify(token, "thisismynewcoruse");
//   console.log(data)

// };

// myFun();

  // How toJSON works under the hood
// const pet = {
//   name: "Logi"
// }

// pet.toJSON = function () {
//   // console.log(this)
//   // return this
//   return {}

// }

// console.log(JSON.stringify(pet));


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