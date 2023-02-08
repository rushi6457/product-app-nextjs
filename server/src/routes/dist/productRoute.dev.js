"use strict";

var express = require('express');

var ProductModel = require('../models/productModel');

var addProducts = function addProducts(req, res) {
  var _req$body, name, price, description, image, newProduct;

  return regeneratorRuntime.async(function addProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, price = _req$body.price, description = _req$body.description, image = _req$body.image;
          _context.prev = 1;
          newProduct = new ProductModel({
            name: name,
            price: price,
            description: description,
            image: image
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(newProduct.save());

        case 5:
          res.status(200).send({
            message: "Products added successfully",
            newProduct: newProduct
          });
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.send({
            message: _context.t0
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var getProducts = function getProducts(req, res) {
  var products;
  return regeneratorRuntime.async(function getProducts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(ProductModel.find());

        case 3:
          products = _context2.sent;
          res.send({
            message: products
          }).status(200);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.send({
            message: _context2.t0
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var deleteProduct = function deleteProduct(req, res) {
  var id, product;
  return regeneratorRuntime.async(function deleteProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(ProductModel.findOneAndDelete({
            _id: id
          }));

        case 4:
          product = _context3.sent;
          res.send({
            message: "Product removed successfully",
            product: product
          });
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.send({
            message: _context3.t0
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var updateProduct = function updateProduct(req, res) {
  var product, prod;
  return regeneratorRuntime.async(function updateProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(ProductModel.findById(req.params.id));

        case 3:
          product = _context4.sent;
          product.price = req.body.price;
          _context4.next = 7;
          return regeneratorRuntime.awrap(product.save());

        case 7:
          prod = _context4.sent;
          res.send(prod);
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.send(_context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports = {
  addProducts: addProducts,
  getProducts: getProducts,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct
};