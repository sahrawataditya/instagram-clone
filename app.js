const express = require('express');
const app = express();
// const { MONGO_URL } = require('./db/keys')
require('./models/User')
require('./models/posts')
const connect = require('./db/connection')
const startServer = require('./server/server')
app.use(express.json())

app.use(require('./routes/index'))
app.use(require('./routes/post'))

connect();
startServer(app)
