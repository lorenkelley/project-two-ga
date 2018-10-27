const List = require('../models/List')

// create new list
listController = {

    create: (req, res) => {
    List.create(req.body).then((newList)=>{
        res.redirect('/${newList._id}')
    })
    },

    index: (req, res) => {
        List.find().then((list)=>{
            res.render('list/index', {
             list: list   
            })
        })
    },
    show: (req, res) => {
        List.findById(req.params.id).then((list)=>{
            res.render('list/show',{
                list:list
            })
        })
    },
    



}





module.exports = listController