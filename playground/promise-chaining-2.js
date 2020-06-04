require("../src/db/mongoose");
const Task = require("../src/models/tasks");

// Task.findByIdAndDelete("5e8a36d7ef8cd738a85586d4")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log("Error: ", e);
//   });


const deleteTaskAndCount = (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
}

deleteTaskAndCount('5e8a36d7ef8cd738a85586d4', false).then(count => {
  console.log(count);
}).catch(e => {
  console.log(e);
});