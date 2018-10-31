// bring in express
const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const listController = require('../controllers/list')
const productController = require('../controllers/product')
const userController = require('../controllers/user')

// HOME
// display home page
router.get('/', applicationController.index)
// --------------------------
router.get('/gallery', applicationController.show)

// USER
// display the users home 
router.get('/users', userController.index)
// this is basically the same as the homepage route but the /user is added to corelate to the user controller
// // create new user
router.get('/users/new', userController.new)
        // http verb - router 
router.post('/users', userController.create)
// display specfic user profile
router.get('/users/:userId', userController.show)
// edit user this is where update lives
router.get('/users/:userId/edit', userController.edit)
// // update a list for a specfic user
router.put('/users/:userId', userController.update)
//  delete one list for specfic user
router.delete('/users/:userId', userController.delete)
//   http verb         
// ---------------------------
// LIST
//  create a new list
router.post('/users/:userId/list', listController.create)
// display all lists
router.get('/users/:userId/list', listController.index)
//  display one list
router.get('/users/:userId/list/:listId', listController.show)
//  update a list for a specfic user
router.put('/users/:userId/list/listId', listController.update)
//  delete one list for specfic user
router.delete('/list/:listId', listController.delete)
// ---------------------------------
//  PRODUCT
//  display all products
router.get('/products', productController.index)
// // update a list for a specfic user
// router.put('/products/:productsId', productController.update)
// //  delete one list for specfic user
// router.delete('/products/:productsId', productController.delete)



// export the router so that it can be acessed in other files
module.exports = router