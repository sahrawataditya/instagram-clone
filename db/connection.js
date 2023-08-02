const mongoose = require('mongoose')
const {MONGO_URL}=require('./keys')

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        // mongoose.connection.on('connected', () => {
        //     console.log("MongoDB is connected")
        // })
        console.log("Database is connected")
        // })

    } catch (error) {
        // mongoose.connection.on('error', (err) => {
        // console.log("connection failed ", err)
        console.log("Connection failed ",error)
        process.exit(1);
        }
    }

module.exports = connect;