const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Product = new Schema({
    name: String,
    description: String,
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'category'
    }
})

module.exports = mongoose.model('product',Product);