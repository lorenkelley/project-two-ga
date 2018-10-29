// bring in express
const express = require('express')
const router =  express.Router()
const applicationController = require('../controllers/application')
const listController = require('../controllers/list')
const productController = require('../controllers/product')
const userController = require('../controllers/user')

// HOME
// display home page
router.get('/', applicationController.index)
// --------------------------
// USER
// display the users home 
router.get('/user', userController.index)
// this is basically the same as the homepage route but the /user is added to corelate to the user controller
// display specfic user profile
router.get('/user/:userId', userController.show)
// ---------------------------
// LIST
// create a new list
router.post('/user/:userId/list', listController.create)
//display all lists
router.get('/user/:userId/list', listController.index)
// display one list
router.get('/user/:userId/list/:listId', listController.show)
// update a list for specfic user
router.put('/user/:userId/list/listId', listController.update)
// delete one list for specfic user
router.delete('/list/:listId', listController.delete)
// ---------------------------------
//  PRODUCT
//  display all products
router.get('/product', productController.index)



// export the router so that it can be acessed in other files
module.exports = router