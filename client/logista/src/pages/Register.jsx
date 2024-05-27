import React, { useState } from 'react'

const Register = () => {

const [data,setData]= useState({
    name: '',
    email: '',
    password: '',
})

const registerUser=(e)=>{
   e.preventDefault()
}

  return (
    <div>
        <form onSubmit={registerUser}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter name..." value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter email..." value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter password..." value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
            <button type="submit">Register</button>
       
        </form>
      
    </div>
  )
}

export default Register
