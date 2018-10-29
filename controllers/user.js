// 'boilerplate' for user controller
const User = require('../models/User')
 const List = require('../models/List')


userController = {

    index: (req, res) => {
        // display the users profile and display their list
        User.findById({}).populate('list')
            .then((users) => {
                res.render('users/index', {
                    users: users

                })
            })
    }
}





module.exports = userController