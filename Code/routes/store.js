const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();

// in case of get and post methods, the order of routes does not matter because they do Exact Matching
// only when we use use() method the order matters because it does Partial Matching
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "store.html"));
});

module.exports = router;
