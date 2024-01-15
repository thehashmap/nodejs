const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/store");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs"); // set the view engine to ejs
app.set("views", "views"); // set the views folder to views

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // serve static files like css, js, images, etc.

// order of routes matters because the first route that matches will be used
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//handle 404 error
app.use(errorController.get404);

app.listen(3000);
