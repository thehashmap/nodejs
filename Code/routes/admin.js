const express = require("express");
const path = require("path");

const productsController = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
// route changed from /product to /admin/add-product
// routes can be same if they are of different methods (GET, POST, etc.)
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
