const express = require("express");
const path = require("path");

const router = express.Router();
const productsController = require("../controllers/products");

// in case of get and post methods, the order of routes does not matter because they do Exact Matching
// only when we use use() method the order matters because it does Partial Matching
router.get("/", productsController.getProducts);

module.exports = router;
