const {model,Schema} = require("mongoose")

const ProductSchema = new Schema({
    name:{type: String},
    price:{type: Number},
    description:{type: String},
    image:{type: String}
},{
    timestamps: true
})
const ProductModel = model('product',ProductSchema)
module.exports = ProductModel
