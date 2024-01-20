const express = require("express");
const path = require("path");

const router = express.Router();
const shopController = require("../controllers/shop");

// in case of get and post methods, the order of routes does not matter because they do Exact Matching
// only when we use use() method the order matters because it does Partial Matching
router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
