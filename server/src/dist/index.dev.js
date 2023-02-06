"use strict";

var express = require('express');

var cors = require('cors');

var app = express();

var connect = require('./config/db');

var productRoute = require("./routes/productRoute");

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true
}));
app.post("/addproduct", productRoute.addProducts);
app.get("/getproducts", productRoute.getProducts);
app["delete"]("/deleteProduct/:id", productRoute.deleteProduct);
app.patch("/updateproduct/:id", productRoute.updateProduct);
app.get("/", function (req, res) {
  return res.send("HELLO");
});
app.listen(process.env.PORT, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(connect());

        case 2:
          console.log("Server started on port http://localhost:".concat(process.env.PORT));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});