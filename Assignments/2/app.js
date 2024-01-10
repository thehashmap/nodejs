const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); // Allows the request to continue to the next middleware in line
// });

// app.use((req, res, next) => {
//   console.log("In another middleware!");
//   res.send("<h1>Assignment solved (almost!)</h1>");
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res) => {
  console.log("In the add-product middleware!");
  res.send(
    "<h1>The /add-product page</h1><form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res) => {
  console.log("In the default middleware!");
  res.send("<h1>The " + req.url + " page</h1>");
});

app.listen(3000);
