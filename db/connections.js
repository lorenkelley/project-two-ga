const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log('connected to mongobb')
})

module.exports = mongoose