const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/store");

const app = express();

app.set("view engine", "ejs"); // set the view engine to ejs
app.set("views", "views"); // set the views folder to views

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // serve static files like css, js, images, etc.

// order of routes matters because the first route that matches will be used
app.use("/admin", adminData.routes);
app.use(shopRoutes);

//handle 404 error
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 | Page Not Found" });
});

app.listen(3000);
