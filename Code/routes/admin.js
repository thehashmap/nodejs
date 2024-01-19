const express = require("express");
const path = require("path");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/add-product => POST
// route changed from /product to /admin/add-product
// routes can be same if they are of different methods (GET, POST, etc.)
router.post("/add-product", adminController.postAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

module.exports = router;
