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
    },
    show: (req,res) => {
        const userId = req.params.userId
        User.findById(userId).populate('(user')
        .then((user) =>{
            res.render('users/show', {user:user})
        })
    }
}





module.exports = userController