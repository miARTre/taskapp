require("../src/db/mongoose");

const User = require("../src/models/user");

// 686d335531b1692401b945f2 => id from db

User.findByIdAndUpdate("686d39f81536d69cc7a272ed", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 })
  })
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });

