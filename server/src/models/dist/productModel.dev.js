"use strict";

var _require = require("mongoose"),
    model = _require.model,
    Schema = _require.Schema;

var ProductSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: true
});
var ProductModel = model('product', ProductSchema);
module.exports = ProductModel;