require("../src/db/mongoose");

const User = require("../src/models/user");

// 686d335531b1692401b945f2 => id from db

// User.findByIdAndUpdate("686d39f81536d69cc7a272ed", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("686d335531b1692401b945f2", 2)
  .then((count) => {
    console.log("count is:", count);
  })
  .catch((e) => console.log("error:", e));
