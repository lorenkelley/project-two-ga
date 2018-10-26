//  require mongoose
const mongoose = require('../db/connections')
// declare Schema
const Schema = mongoose.Schema

// the schema is the blueprint it will tell server what expect
const User = new Schema({
    name: String,
    email: String,
    skintone: Number,
    list: [
        //  reference 
        {
            type: Schema.Types.ObjectId,
            ref: 'list'
        }
    ]
})

// 
module.exports = mongoose.model('User', User)