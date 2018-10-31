// -----------------------------------------
const User = require('../models/User.js')
const Product = require('../models/Product.js')
const List = require('../models/List.js')
const mongoose = require ('./connections')
// ------------------------------------------

// -------------------------------------------
// PRODUCTS
//  lips
const lipstickOne = new Product({
    name: 'A little tamed',
    brand: 'MAC',
    img: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S4K001_280x320_0.jpg' ,
    type: 'Lipstick',
    price:  18.50
})

const lipstickTwo = new Product({
    name: 'Burning Love',
    brand: 'MAC',
    img: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S4K017_280x320_0.jpg' ,
    type: 'Lipstick',
    price:  18.50
    

})
const lipstickthree = new Product({
    name: 'Devoted To Chili',
    brand: 'MAC',
    img: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S4K031_280x320_0.jpg' ,
    type: 'Lipstick',
    price:  18.50
  
})
// cheeks
const highlighterOne = new Product({
    name: 'Bright Response',
    brand: 'MAC',
    img: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S5T38K_280x320_0.jpg' ,
    type: 'Blush + Bronzer',
    price:  24.50

})
const highlighterTwo = new Product({
    name: 'Fever',
    brand: 'MAC',
    img: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_M22039_280x320_0.jpg' ,
    type: 'Blush + Bronzer',
    price:  24.50

})
const highlighterThree = new Product({
    name: 'Never Say Never',
    brand: 'MAC',
    img: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S5T38E_280x320_0.jpg' ,
    type: 'Blush + Bronzer',
    price:  24.50

})
// eyes
const eyeOne = new Product({
    name: 'Bright Response',
    brand: 'MAC',
    img: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S5T38K_280x320_0.jpg' ,
    type: 'Blush + Bronzer',
    price:  24.50

})
const eyeTwo = new Product({
    name: 'Fever',
    brand: 'MAC',
    img: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_M22039_280x320_0.jpg' ,
    type: 'Blush + Bronzer',
    price:  24.50

})
const eyeThree = new Product({
    name: 'abc',
    brand: 'MAC',
    img: 'https://www.maccosmetics.com/media/export/cms/products/280x320/mac_sku_S5T38E_280x320_0.jpg' ,
    type: 'Blush + Bronzer',
    price:  24.50

})
//--------------------------------------
// LIST
const eyeList = new List({
    title: 'Eyes',
    name: ['Bright Response', 'abc'],
    price: [24.50, 24.50 ]
    
})
const cheekList = new List({
    title: 'Cheeks',
    name: ['Fever','Never Say Never'],
    price: [18.50, 18.50]
    
})
const lipList = new List({
    title: 'Lips',
    name: ['Burning Love',],
    price: [18.50, 18.50]
    
})
// USER
const userOne = new User ({
    name: "Shia",
    email: "janedoe@gmail.com",
    skintone: 5650,
    list: [eyeList, cheekList, lipList]
})

const userTwo = new User ({
    name: "Erin",
    email: "doe@gmail.com",
    skintone: 3250,
    list: [cheekList, lipList]
})

const userThree = new User ({
    name: "Ashanti",
    email: "janedoe@gmail.com",
    skintone: 4750,
    list: [lipList]
})


User.remove({})
.then(()=> List.remove({}))
.then(()=> Product.remove({}))
.then(() => Product.insertMany([lipstickOne,lipstickTwo, lipstickthree, highlighterOne , highlighterTwo, highlighterThree, eyeOne, eyeTwo, eyeThree]))
.then(() => List.insertMany([eyeList, cheekList, lipList]))
.then(() => user.save())
.then(() => userOne.save())
.then(() => userTwo.save())
.then(() => userThree.save())

.then(() => console.log("Database seeded success"))
.then(() => mongoose.connection.close())