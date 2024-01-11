const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();
const adminData = require("./admin");

// in case of get and post methods, the order of routes does not matter because they do Exact Matching
// only when we use use() method the order matters because it does Partial Matching
router.get("/", (req, res, next) => {
  // console.log("store.js", adminData.products); // This method is potentially dangerous because it exposes the data across all requests and users
  const products = adminData.products;
  res.render("store", {
    pageTitle: "Shop",
    path: "/",
    products: products,
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
