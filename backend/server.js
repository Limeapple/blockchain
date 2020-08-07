const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const PORT = process.env.PORT || 5001
const MONGO_URI = 'mongodb+srv://randomPerson:randomPerson123@cluster0.ipipo.mongodb.net/blockchain-app?retryWrites=true&w=majority'
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    err => err ? console.log('Failed to connect to mongoDB') : console.log('MongoDB connected'))

const userAndMsgRoute = require('./routes/userAndMsg')
app.use('/user', userAndMsgRoute)

app.listen(PORT, console.log('Server connected to port', PORT))

