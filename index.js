
const express = require('express')
const user = require('./ROUTES/userRoute')
const post = require('./ROUTES/postRoute')
const connection = require('./Mongoose')
const cors = require('cors')
require('dotenv').config()

const app  = express();
app.use(express.json())
app.use(cors())

app.use('/users',user)
app.use('/posts',post)



app.get('/',(req,res)=>{
    res.send('Welcome to HomeRoute')
})
app.listen(process.env.PORT,()=>{
    connection()
    console.log('Server is running on port 8080')
})





