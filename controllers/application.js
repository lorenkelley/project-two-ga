// 'boilerplate' for application controller
const applicationController ={
    index: (req, res) => {
        res.render('index')
    },
     show: (req, res) => {
        res.render('gallery')
    }
    
}





// export this file to the rest of the folders
module.exports = applicationController