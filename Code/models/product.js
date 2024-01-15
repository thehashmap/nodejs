const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    // readFile is not recommended for large files as it reads the entire file at once, instead use streams
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        // if file exists
        products = JSON.parse(fileContent);
      }
      products.push(this); // this refers to the current object of the class
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // static methods are called on the class itself and not on the instances of the class
  static fetchAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        // if file does not exist
        cb([]); // callback function to be executed after the file is read
      }
      cb(JSON.parse(fileContent));
    });
  }
};
