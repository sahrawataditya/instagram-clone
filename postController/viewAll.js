const mongoose = require('mongoose')
const postModel = mongoose.model('Post')

const viewAll = async (req,res)=>{
    postModel.find()
    .populate('postedBy','-password -_id -__v -email')
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
}
module.exports = viewAll;