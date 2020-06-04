require("../src/db/mongoose");
const User = require("../src/models/users");

// User.findByIdAndUpdate("5e8a333bf0ba5f284c3ffc1b", { age: 3 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 3 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5e8a333bf0ba5f284c3ffc1b", 3)
  .then((count) => {
    console.log("count: ", count);
  })
  .catch((e) => {
    console.log(e);
  });
