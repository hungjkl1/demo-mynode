const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Category = new Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('category',Category);