const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-app-api");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error(
          "This password is not allowed. Please use something more unique!"
        );
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positiv number");
      }
    },
  },
});

const me = new User({
  name: "     Mire               ",
  email: "MIRNESBB@gmail.com",
  password: "     phone098!         ",
});

me.save()
  .then((me) => console.log(me))
  .catch((error) => {
    console.log("Error: ", error);
  });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: "    Learn MONGODB      ",
});

task
  .save()
  .then(() => console.log(task))
  .catch((error) => console.log(error));

