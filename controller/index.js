const loginUser = require('./loginUser')
const signUp = require('./Signup')
const allUser = require('./Allusers')
const readUser = require('./Readuser')
const deleteUser = require('./Delete')
const changePass = require('./changePass')

module.exports = {
    loginUser,
    signUp,
    allUser,
    readUser,
    deleteUser,
    changePass
}