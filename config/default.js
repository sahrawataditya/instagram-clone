const dotenv = require('dotenv')
dotenv.config()

const config = {
    mongodb: process.env.MONGO_URL,
    port: process.env.PORT || 3000,
    jwt_key:process.env.JWT_SECRET
}

module.exports = config;