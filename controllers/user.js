// 'boilerplate' for user controller
ObjectId = require('mongodb').ObjectID
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
        const userId = req.params.userId
        User.findById(userId).populate('user')
            .then((user) => {
                console.log(user)
                res.render('users/show', {
                    user: user
                })
            })
    },
    edit:(req, res) => {
        User.findById(req.params.id).then((users) => {
            res.render('users/edit')
        })
    },
    // update a users account 
    update: (req, res) => {
        List.findByIdAndUpdate(req.params.id, req.body).then((updatedList) => {
            res.redirect('/${req.params.id}')
        })
    },
    // delete a users account by finding their id and take them back to the home page
    delete: (req, res) => {
        User.findByIdAndRemove(ObjectId(req.params.id)).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = userController