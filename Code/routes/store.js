const express = require("express");

const router = express.Router();

// in case of get and post methods, the order of routes does not matter because they do Exact Matching
// only when we use use() method the order matters because it does Partial Matching
router.get("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

module.exports = router;
