const User = require('../models/User')

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        if (!user) {
            console.log("user not found")
        }
        return res.status(200).json({
            message: "User Deleted Successfully",
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = deleteUser;