const {model,Schema} = require("mongoose")

const ProductSchema = new Schema({
    name:{type: String, required: true},
    price:{type: Number, required: true},
    description:{type: String, required: true},
    image:{type: String, required: true}
},{
    timestamps: true
})
const ProductModel = model('product',ProductSchema)
module.exports = ProductModel
