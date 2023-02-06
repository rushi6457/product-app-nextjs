"use strict";

var _require = require("mongoose"),
    model = _require.model,
    Schema = _require.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var ProductModel = model('product', ProductSchema);
module.exports = ProductModel;