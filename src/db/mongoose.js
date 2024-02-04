const mongoose = require('mongoose')
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } }

mongoose.connect(process.env.MONGODB_URL, clientOptions)
