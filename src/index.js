const express = require("express");
require("./db/mongoose");
const userRouter = require("../src/routers/user");
const taskRouter = require("../src/routers/task");

const app = express();

const PORT = process.env.PORT || 3000;

const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {

    if(!file.originalname.match(/\.(doc|docx)$/)) {
       return cb(new Error("Please update a Word document!"))
    }
    // if(!file.originalname.endsWith('.pdf')) {
    //   return cb(new Error("Please update a PDF!"))
    // }

    cb(undefined, true)
    // cb(new Error("File must be PDF!"));
    // cb(undefined, true)
    // cb(undefined, false)
  },
});

// const errorMiddleware = (req, res, next) => {
//   throw new Error('From my middleware')
// }

app.post("/upload", upload.single("upload"), async (req, res) => {
  res.send();
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message});
});

// app.post("/upload", upload.single("upload"), async (req, res) => {
//   res.send();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log("Server run on PORT:", PORT);
});
