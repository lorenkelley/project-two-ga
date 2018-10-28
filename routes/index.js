// bring in express
const express = require('express')
const router =  express.Router()
const applicationController = require('../controllers/application')
const listController = require('../controllers/list')
const productController = require('../controllers/product')
const userController = require('../controllers/user')


// HOME 
router.get('/', applicationController.index)
// --------------------------
// USER
// go into the users profile
router.get('/user', userController.index)
// this is basically the same as the homepage route but the /user is added to corelate to the user controller
// ---------------------------
// LIST
// create a new list
router.post('/list', listController.create)
//display all lists
router.get('/list', listController.index)
// display one list
router.get('/list/:listId', listController.show)
// update a list
router.put('/list/listId', listController.update)
// delete one list
router.delete('/list/:listId', listController.delete)
// ---------------------------------
//  PRODUCT
//  display all products
router.get('/product', productController.index)



// export the router so that it can be acessed in other files
module.exports = router