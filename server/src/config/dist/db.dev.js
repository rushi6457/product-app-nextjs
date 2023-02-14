"use strict";

var mongoose = require('mongoose');

require('dotenv').config();

var connect = function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", mongoose.connect('mongodb+srv://rushi6457:Rushikesh6457@cluster0.nnaatan.mongodb.net/products?retryWrites=true&w=majority'));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = connect;