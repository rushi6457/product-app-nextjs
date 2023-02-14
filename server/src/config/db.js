const mongoose = require('mongoose');
require('dotenv').config()

const connect = async() =>{
    return  mongoose.connect('mongodb+srv://rushi6457:Rushikesh6457@cluster0.nnaatan.mongodb.net/products?retryWrites=true&w=majority')
}
module.exports = connect