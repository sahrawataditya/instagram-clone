const User = require('../models/User')

const readUser = async (req, res) => {
    try {
        const userId = req.user._id
        console.log(userId)
        const user = await User.findById(userId ,"-_id -password -__v -email")
        if (!user) {
            console.log("User not found")
        }
        return res.status(200).json({
            message: "Logged in User :",
            user,
            success:true
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error",success:false })
    }
}

module.exports=readUser;