import axios from 'axios'
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

     const handleSubmit=((e)=>{
         e.preventDefault();
    //     // axios.post('http://localhost:8080/login',{email,password})
    //     // axios.post('https://employee-mern-api-tau.vercel.app/login',{email,password})
       axios.post('/login', {email,password})
       .then(result => {console.log(result)
            if(result.data ==='success')
             navigate('/home')
         })

        .catch(err=>console.log(err))
     })

  return (
    <div>
      <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='w-50 bg-white rounded p-4'>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className='mt-3'>
                <label>Email</label>
                <input type='email' placeholder='Enter your email' className='form-control' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='mt-2'>
                    <label className='mb-2'>Password</label>
                    <input type='text' placeholder='Enter your name' className='form-control' onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button className='btn btn-success'>Login</button>
                <p>Have an account?</p>
                <Link to={'/'} type='submit' className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0 w-100'>Register</Link>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login 
