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
    update:(req,res)=>{
        List.findByIdAndUpdate(req.params.id, req.body).then((updatedList)=>{
            res.redirect('/${updatedList._id}')
        })
    },
    delete:(req,res) =>{
        List.findByIdAndRemove(req.params.id).then(()=>{
            res.redirect('/user')
        })
    }
}





module.exports = listController