const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  //     constructor() {
  //         this.products = [];
  //         this.totalPrice = 0;
  //   }
  // This method would create a new cart everytime
  // But the idea is that we want to have only one cart at all times
  // So we don't need a constructor

  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      // If there is no error, then we have a cart
      // If there is an error, then we don't have a cart
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        // If we have an existing product, then we want to update the quantity
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        // If we don't have an existing product, then we want to add the product
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      // Calculate the total price
      cart.totalPrice = cart.totalPrice + +productPrice; // +productPrice converts the string to a number
      // Save the cart
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
