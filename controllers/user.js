// 'boilerplate' for user controller
const userController ={
    // display the user profile
    index: (req, res) => {
        //you shouldn't need /user because it's already defined in your index.js
        res.render('/user')
    }
    

}





module.exports = userController