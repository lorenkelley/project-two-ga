// bring in express
const express = require('express')
const router =  express.Router()
const applicationController = require('../controllers/application')
// const listController = require('../controllers/list')
// const productsController = require('../controllers/products')
// const userController = require('../controllers/user')


// GET home page
router.get('/', applicationController.index)


// go into the 







// export the router so that it can be acessed in other files
module.exports = router