// 'boilerplate' for user controller
const User = require('../models/User')
const Product = require('../models/Product')

const userController ={
    // display the user profile
    index: (req, res) => {
        //you shouldn't need /user because it's already defined in your index.js
        res.render('./users/index')
    }
    

}





module.exports = userController