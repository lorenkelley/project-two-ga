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
        User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
            res.redirect('/users')
        })
    },
    // delete a users account by finding their id and take them back to the home page
    delete: (req, res) => {
        User.findByIdAndRemove(ObjectId(req.params.id)).then(() => {
            res.redirect('/')
        })
    }
    // delete: (req, res) => {
    //     const usersId = req.params.id
    //     User.findOneAndRemove(usersId)
    //     .then((usersId) => {
    //         res.send('user deleted')
    //         // res.redirect('/')
    //     })
    // }
    // delete:(req, res) => {

    //     const userIdToDelete = ObjectId(request.params.id)
    //     User.findByIdAndRemove(userIdToDelete).then(() => {
    //       console.log(`Successfully deleted user with ID ${userIdToDelete}!`)
    //       response.redirect('users')
    //     })
    //   }
}

module.exports = userController