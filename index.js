require('dotenv').config()

console.log("hello.....");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/angle",(req,res) =>{
    res.send("hello angle one....")
});

app.get("/home",(req,res) =>{
    res.send("<h1>hello home page</h1>")
});

app.listen(process.env.PORT, () => {
  console.log(` this Example app listening on port ${port}`);
});
