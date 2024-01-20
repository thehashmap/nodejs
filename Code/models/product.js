const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  // readFile is not recommended for large files as it reads the entire file at once, instead use streams
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // if file does not exist
      cb([]); // callback function to be executed after the file is read
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    // make sure to use arrow function to access this so that "this" doesn't loose its context and refers to the class
    this.id = Math.random().toString(); // generate a random string as id
    getProductsFromFile((products) => {
      products.push(this); // this refers to the current object of the class
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // static methods are called on the class itself and not on the instances of the class
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
