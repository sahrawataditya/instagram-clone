const express = require('express')
const user_router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const controller = require('../postController')

user_router.post('/createpost',verifyToken,controller.createpost)
user_router.get('/allpost',verifyToken,controller.viewAll)
user_router.get('/mypost',verifyToken,controller.mypost)


module.exports=user_router;