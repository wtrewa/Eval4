
const mongoose  = require('mongoose')
const connection = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('connection has built')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connection;