const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const List = new Schema({
    title: String,
    name: String,
    price: Number
    
})

module.exports = mongoose.model('List',List)