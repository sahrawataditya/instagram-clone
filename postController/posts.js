const mongoose = require('mongoose')
const postModel = mongoose.model('Post')


const createpost = async (req, res) => {
    const { title, body } = req.body
    if (!title || !body) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    const post = new postModel({
        title,
        body,
        postedBy: req.user
    })
    post.save().then((result) => {
        res.json({ post: result })
    }).catch((err) => {
        console.log(err)
    });
}
module.exports = createpost;