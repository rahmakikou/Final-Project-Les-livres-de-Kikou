
const express = require ('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const livreRouter = require ('./Routes/Livre')
const CommentRouter = require('./Routes/Comment')

const app = express()

require('dotenv').config() 

ConnectDB() 
app.use(express.json()) 


app.use('/api/auth', userRouter) 

app.use( '/kikou/livres', livreRouter)

app.use( '/kikou/users', CommentRouter) 

app.listen(process.env.port, console.log(`Server is runing on the port ${process.env.port}`))  