// -----------------------------------------
const User = require('../models/User.js')
const Product = require('../models/Product.js')
const List = require('../models/List.js')
const mongoose = require ('./connections')
// ------------------------------------------

// -------------------------------------------
// PRODUCTS
// //  lips
// const lipstickOne = new Product({
//     name: 'A little tamed',
//     brand: 'MAC',
//     image: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S4K001_280x320_0.jpg' ,
//     type: 'Lipstick',
//     price:  18.50,
// })

// const lipstickTwo = new Product({
//     name: 'Burning Love',
//     brand: 'MAC',
//     image: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S4K017_280x320_0.jpg' ,
//     type: 'Lipstick',
//     price:  18.50,
    

// })
// const lipstickthree = new Product({
//     name: 'Devoted To Chili',
//     brand: 'MAC',
//     image: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S4K031_280x320_0.jpg' ,
//     type: 'Lipstick',
//     price:  18.50,
  
// })
// // cheeks
// const highlighterOne = new Product({
//     name: 'Bright Response',
//     brand: 'MAC',
//     image: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S5T38K_280x320_0.jpg' ,
//     type: 'Blush + Bronzer',
//     price:  24.50,

// })
// const highlighterTwo = new Product({
//     name: 'Fever',
//     brand: 'MAC',
//     image: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_M22039_280x320_0.jpg' ,
//     type: 'Blush + Bronzer',
//     price:  24.50,

// })
// const highlighterThree = new Product({
//     name: 'Never Say Never',
//     brand: 'MAC',
//     image: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S5T38E_280x320_0.jpg' ,
//     type: 'Blush + Bronzer',
//     price:  24.50,

// })
// // eyes
// const eyeOne = new Product({
//     name: 'Bright Response',
//     brand: 'MAC',
//     image: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S5T38K_280x320_0.jpg' ,
//     type: 'Blush + Bronzer',
//     price:  24.50,

// })
// const eyeTwo = new Product({
//     name: 'Fever',
//     brand: 'MAC',
//     image: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_M22039_280x320_0.jpg' ,
//     type: 'Blush + Bronzer',
//     price:  24.50,

// })
// const eyeThree = new Product({
//     name: 'Never Say Never',
//     brand: 'MAC',
//     image: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S5T38E_280x320_0.jpg' ,
//     type: 'Blush + Bronzer',
//     price:  24.50,

// })
// //--------------------------------------
// // USER
// const userOne = new User ({
//     name: "Tia",
//     email: "janedoe@gmail.com",
//     skintone: 5650,
//     list: [ 24.50]
// })

// const userTwo = new User ({
//     name: "Tia",
//     email: "janedoe@gmail.com",
//     skintone: 5650,
//     list: [ 24.50]
// })

// const userThree = new User ({
//     name: "Tia",
//     email: "janedoe@gmail.com",
//     skintone: 5650,
//     list: [ 24.50]
// })
// User.remove({}).then(() => List.insertMany([your list variables go here]).then(() => List.remove({})).then(() => Product.insertMany([your product variables go here]))
//    .then(() =>  List.save())
//    .then(() =>  list variables go here.save())
//    .then(() =>  list variables go here.save())
//    .then(() => console.log("Database seeded success"))
//    // to close out seed.js
//    .then(() => mongoose.connection.close())