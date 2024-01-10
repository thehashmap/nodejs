const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
// route changed from /product to /admin/add-product
// routes can be same if they are of different methods (GET, POST, etc.)
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
