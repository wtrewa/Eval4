import React, { useState } from 'react'
let init = {
  name : '',
  email:'',
  gender:'',
  password:''
}
const SignUp = () => {
 
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
     
     fetch("https://fair-gold-macaw-robe.cyclic.app/users/register",{
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
     }).catch((err)=>{
      console.log(err)
     })
  }

  return (
    <div>
      <h1>Register</h1>
      <form  onSubmit={formSubmit}>
        <div>
            <label htmlFor="">Username</label>
            <input type="text" name='name' value={formState.name} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="">Email</label>
            <input type="email" name='email'  value={formState.email} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="">Gender</label>
            <input type="text" name='gender'  value={formState.gender} onChange={handleChange} required />
        </div>
        
        <div>
            <label htmlFor="">PASSWORD</label>
            <input type="password" value={formState.password} name='password'  onChange={handleChange} required />
        </div>
        <div><button type="submit" >Register</button></div>
      </form>
    </div>
  )
}

export default SignUp
