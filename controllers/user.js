// 'boilerplate' for user controller

const User = require('../models/User')
const List = require('../models/List')


userController = {
    // user home page
    index: (req, res) => {

        User.find().then((user) => {
            res.render('users/index', {
                user: user
            })
        })
    },
    // make a new user
    new: (req, res) => {
        res.render('users/new')
    },
    // create and save a new user
    create: (req, res) => {
        User.create(req.body).then((newUser) => {
            res.redirect(`/users/${newUser._id}`)
        })
    },
    // find the users by id and dispaly that user
    show: (req, res) => {
        const userId = req.params.id
        User.findById(userId).populate('user')
            .then((user) => {
                console.log(user)
                res.render('users/show', {
                    user: user
                })
            })
    },
    edit: (req, res) => {
        console.log("This users id ", req.params.id)
        User.findById(req.params.id).then((user) => {
            res.render('users/edit',{
                user: user
            })
        })
    },
    // update a users account 
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
            res.redirect(`/users/${updatedUser.id}`)
        })
    },
    // delete a users account by finding their id and take them back to the home page
    delete: (req, res) => {

        console.log(req.params.id)

        User.findByIdAndDelete(req.params.id).then(() => {
            res.redirect('/')
        })
    }

}

module.exports = userController