const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Product = new Schema({
    name: String,
    brand: String,
    type: String,
    price: Number,
    location: String

})

module.exports = mongoose.model('Product', Product)