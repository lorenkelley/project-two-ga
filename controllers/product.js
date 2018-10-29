const Product = require('../models/Product')

const productController = {
    // products home page
    index: (req, res) => {
        Product.find().then((product)=>{
            res.render('products', {
             product: product   
            })
        })
    },
        // update products
        update: (req, res) => {
            Product.findByIdAndUpdate(req.params.id, req.body).then((updatedProduct) => {
                res.redirect('/${req.params.id}')
            })
        },
        // delete products
        Product: (req, res) => {
            User.findByIdAndRemove(req.params.id).then(() => {
                res.redirect('/products')
            })
        }

}

module.exports = productController