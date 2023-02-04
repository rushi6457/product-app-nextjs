const {model,Schema} = require("mongoose")

const ProductSchema = new Schema({
    name:'',
    price:'',
    description:'',
    image:''
},{
    timestamps: true
})
const ProductModel = model('product',ProductSchema)
module.exports = ProductModel
