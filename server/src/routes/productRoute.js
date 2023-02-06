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
        res.status(200).send({message:"Products added successfully"})
    } catch (error) {
        res.send({message:error})
    }
}

const getProducts =async (req, res) => {
    try {
        let products = await ProductModel.find()

        res.send({message:products}).status(200)
    } catch (error) {
        res.send({message:error})
    }
}

const deleteProduct = async(req,res) =>{

    let {id} = req.params;
    try {
        let product = await ProductModel.findOneAndDelete({_id:id})
        res.send({message:"Product removed successfully"}) 
    } catch (error) {
        res.send({message:error})
    }
}
const updateProduct = async(req,res) =>{
   
    try {
         let productId = req.params.id;
        let updated = req.body;
        let updateProduct = await ProductModel.findByIdAndUpdate({_id:productId, updated})
        res.status(200).send({message:"Updated successfully",updateProduct})
    } catch (error) {
        res.send({message:error}).status(400)
    }
}

module.exports = {
    addProducts,
    getProducts,
    deleteProduct,
    updateProduct
}


