const User = require('../models/User')
const bcrypt = require('bcrypt')
const signUp = async (req, res) => {

    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please fill all the fields" })
    }
    await User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User Already exists" })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        email,
                        password: hashedpassword,
                        name
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "User SignUp Successfully" })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
        })

        .catch(err => {
            console.log(err)
        })
}
module.exports=signUp;