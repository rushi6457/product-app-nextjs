const express = require('express');
const ProductModel = require('../models/productModel');

const addProducts = async(req,res) =>{
    const {name,price,description,image} = req.body;

    try {
        let newProduct =  new ProductModel({
            name,
            price,
            description,
            image
        })

       await newProduct.save()
        res.status(200).send({message:"Products added successfully",newProduct})
    } catch (error) {
        res.send({message:error})
    }
}

const getProducts =async (req, res) => {
  
    try {
        // const page = parseInt(req.params.page) -1 || 0;
        // const sort = req.query.sort || 'price';
        // let order = req.query.order;
        let limit = req.query.limit;
        
        // const skip = page * limit
      
        let products = await ProductModel.find().limit(limit)
        // .limit(limit).skip(page * limit)
        // .sort(sortBy).skip(page * limit).limit(limit)
      
        res.status(200).send({message:products})
    } catch (error) {
        res.send({message:error})
    }
}

const deleteProduct = async(req,res) =>{

    let {id} = req.params;
    try {
        let product = await ProductModel.findOneAndDelete({_id:id})
        res.send({message:"Product removed successfully",product}) 
    } catch (error) {
        res.send({message:error})
    }
}
const updateProduct = async(req,res) =>{

    try {
        let product = await ProductModel.findById(req.params.id)
        product.price = req.body.price
        const prod  = await product.save()
        res.send(prod)
    } catch (error) {
        res.send(error)
    }

}

const getSingleProduct = async(req,res) =>{

    let product = await ProductModel.findById(req.params.id)
    res.send({message: product}).status(200)
}

module.exports = {
    addProducts,
    getProducts,
    deleteProduct,
    updateProduct,
    getSingleProduct
}


