const controller = require('../controller')
const express = require('express')
const userRouter = express.Router()
const verifyToken = require('../middleware/verifyToken')

userRouter.post('/login',controller.loginUser)
userRouter.post('/signup',controller.signUp)
userRouter.get('/all',verifyToken,controller.allUser)
userRouter.get('/detail',verifyToken,controller.readUser)
userRouter.delete('/delete/:id',controller.deleteUser)
userRouter.patch('/update-user',controller.changePass)

module.exports = userRouter;