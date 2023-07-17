
const express = require('express');
const User = require('../MODEL/userModel')
const  bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userRoute = express.Router();

userRoute.post('/register',async(req,res)=>{
    try {
        const {name , email,gender ,password} = req.body;
       const   newPassword = await bcrypt.hash(password,10)
       const user = await User.create({...req.body,password:newPassword})
        res.send({msg:'User has registerd',user:user})
    } catch (error) {
        res.send({error:error})
    }
})

userRoute.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            res.send({msg:"Sign Up first"})
        }
        const varify = await bcrypt.compare(password,user.password)
        if(!varify){
            res.send({msg:"Password is worng"})
        }
        console.log(user)
     const token =   jwt.sign({
            userId:user._id,name:user.name
          }, 'secret', { expiresIn: '1h' });
         
        res.send({
            msg:"login success",
            token:token
        })
    
    } catch (error) {
        res.send(error)
    }
})

userRoute.get('/logout',async(req,res)=>{
    try {

        const token = req.headers.authorization?.split(' ')[1]
        if(!token)
        {
            res.send('Login first')
        }
        
        
        blacklist.push(token)
        res.send('You have logged out')
    } catch (error) {
        res.send({msg:"error",
        error:error})
    }
   
})

module.exports = userRoute;