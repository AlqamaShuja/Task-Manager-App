const express = require("express");
require("./db/mongoose");
const bcrypt = require("bcryptjs");
// const multer = require("multer");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send("Get is disabled..");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Working on maintainance.");
// });

// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     // if(!file.originalname.endsWith('.pdf')){
//     //   return cb(new Error("Please Upload a PDF"))
//     // }

//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please Upload a word document"));
//     }

//     cb(undefined, true);
//   },
// });

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Process running on port ", port);
});

const Task = require("./models/tasks");
const User = require("./models/users");

// const myFunction = async () => {
//   // const task = await Task.findById("5e9df570d62f6135c428e334");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("5e9df376b0eb2f031c3729d9");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// myFunction();
