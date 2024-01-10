const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/store");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// order of routes matters because the first route that matches will be used
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//handle 404 error
app.use((req, res, next) => {
  res.status(404).send("<h1>404</h1><p>Page not found</p>");
});

app.listen(3000);
