const mongoose = require('mongoose')
const postModel = mongoose.model('Post')

const mypost = async (req,res)=>{
    postModel.find({postedBy:req.user._id})
    .populate('postedBy','-password -_id -__v -email')
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
}
module.exports = mypost;