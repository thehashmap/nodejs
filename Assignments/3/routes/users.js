const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "users.html")); // __dirname is the directory of the current file
  // ".." is used to go one directory up and better to use than "../" because it works on all OS
});

module.exports = router;
