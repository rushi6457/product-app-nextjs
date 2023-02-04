"use strict";

var _require = require("mongoose"),
    model = _require.model,
    Schema = _require.Schema;

var ProductSchema = new Schema({
  name: '',
  price: '',
  description: '',
  image: ''
}, {
  timestamps: true
});
var ProductModel = model('product', ProductSchema);
module.exports = ProductModel;