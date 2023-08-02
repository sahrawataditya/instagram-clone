const User = require('../models/User')

const allUser = async (req, res) => {
    try {
        const users = await User.find({}, '-email -password')
        if (!users) {
            console.log("users not found")
        }
        return res.status(200).json({
            message: "Data found",
            users,
            success:true
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error",success:false })
    }
}
module.exports= allUser;