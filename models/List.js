const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const List = new Schema({
    name: String
})

module.exports = mongoose.model('List',List)