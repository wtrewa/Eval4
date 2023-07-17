import React, { useState } from 'react'
let init = {
  email : '',
  password:''
}
const Login = () => {
 
  const [formState,setFormState] = useState(init)

  const handleChange = (e)=>{
    let {name,value} = e.target;

    let newObj = {
      ...formState,
      [name] :value
    }
    setFormState(newObj)
    console.log(newObj)
  }
  const formSubmit = (e)=>{
     e.preventDefault()
    
     console.log(formState)
     
     fetch("https://fair-gold-macaw-robe.cyclic.app/users/login",{
      method:"POST",
      headers:{
        "content-type": "application/json",
        
      },
      body:JSON.stringify(formState)
     }).then((res)=>{
       console.log(res)
       return res.json()
     }).then((data)=>{
      console.log(data)
      localStorage.setItem('token',JSON.stringify(data.token))
     }).catch((err)=>{
      console.log(err)
     })
  }

  return (
    <div>
      <h1>Login</h1>
      <form  onSubmit={formSubmit}>
        <div>
            <label htmlFor="">Username</label>
            <input type="text" name='email' value={formState.email} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="">PASSWORD</label>
            <input type="password" value={formState.password} name='password'  onChange={handleChange} required />
        </div>
        <div><button type="submit" >Login</button></div>
      </form>
    </div>
  )
}

export default Login
