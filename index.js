import express from "express";
// app
const app = express();

//listen a server
const PORT = 8000;

// get API
app.get("/", (req, res) => {
  return res.status(200).send("hi this is my first API.");
}); // call back function , if request pathako cha bhane matra run huncha
app.get("/sandhya", (req, res) => {
  return res.status(200).send("good afternoon sandhya");
});
//network port range 0 to 65535
//reserved : 0 to 1023
//eg: http:80
//eg: https :443
//eg: ftp: 21
app.listen(PORT, () => {
  console.log(`app is listening on port${PORT}`);
});
