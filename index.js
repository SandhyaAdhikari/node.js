import express from "express";
//create app
const app = express();
// used to make app understand json
// json= java script object notation

app.use(express.json());

//?req methods
//? post (create/add).get(read/retrieve), put (edit/update), delete (remove.delete)

//routes
// app.get("/say.hello", (req, res) => {
//   return res.status(200).send("hello this is magic im pissed");
// });
// app.post("/student/add", (req, res) => {
//   return res.status(201).send({ message: "student add api hit..." });
// });

//add student
let studentlist = [];
app.post("/student/add", (req, res) => {
  const newStudent = req.body;
  studentlist.push(newStudent);
  return res.status(200).send({ message: "student is added successfully" });
});
app.get("/student/list", (req, res) => {
  return res.status(200).send({ message: "success", students: studentlist });
});

//network port
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
