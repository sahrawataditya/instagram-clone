const User = require('../models/User')
const bcrypt = require('bcrypt')

const changePass = async (req, res) => {
    try {
        const { email, password, newPass } = req.body
        const updatedUser = await User.findOne({ email })
        if (!updatedUser) {
            return res.status(404).json({ message: "User Not found" })
        }
        const passMatch = bcrypt.compare(password, updatedUser.password)
        if (!passMatch) {
            return res.status(400).json({ message: "Invalid Password" })
        }
        const Hashedpass = await bcrypt.hash(newPass, 12)
        updatedUser.password = Hashedpass
        await updatedUser.save()
        // const user = await User.findById(userId, '-password')
        return res.status(201).json({ message: "User Updated Successfully", updatedUser })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}
module.exports = changePass;