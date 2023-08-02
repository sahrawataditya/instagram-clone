const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../db/keys')
const config = require('../config/default')
const JWT_SECRET = config.jwt_key

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "Please Enter email and password" })
        }
        await User.findOne({ email: email })
            .then(savedUser => {
                if (!savedUser) {
                    return res.status(422).json({ error: "Innvalid Credentials" })
                }
                const doMatch = bcrypt.compare(password, savedUser.password)
                if (doMatch) {
                    const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                    return res.json({ message: "Login Successfully", token,success:true })
                }
                else {
                    return res.status(422).json({ error: "Invalid..." })
                }
            })
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal Server error",success:false})
    }
}

module.exports = loginUser;