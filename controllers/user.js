// 'boilerplate' for user controller
const User = require('../models/User')
 const List = require('../models/List')


userController = {

    index: (req, res) => {
        User.find().then((user) => {
            
            res.render('users',{
                user: user
            })
         })
    }
}





module.exports = userController