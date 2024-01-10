const express = require("express");
const path = require("path");
const rootDir = require("./utils/path");

const app = express();

const userRoutes = require("./routes/users");

app.use(userRoutes);

app.use("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

// handle 404 error
app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
