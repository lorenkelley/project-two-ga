const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const List = new Schema({
    name: String,
    image: String,
    price: Number
})

module.exports = mongoose.model('List',List)