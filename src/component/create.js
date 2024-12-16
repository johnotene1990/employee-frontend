import axios from 'axios'
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = ((e) => {
        e.preventDefault();
        axios.post("/https://employee-backend-74vw.onrender.com/create", { name, email, age, city, password })
            //axios.post('/create', {name,email,age,city,password})
            .then(res => {
                console.log(res)
                navigate('/home')
            })

            .then(err => console.log(err))
    })

    return (
        <div>
            <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
                <div className='w-50 bg-white rounded p-4'>
                    <form onSubmit={handleSubmit}>
                        <h2>Create Account</h2>
                        <div className='mt-2'>
                            <label className='mb-2'>Name</label>
                            <input type='text' placeholder='Enter your name' required className='form-control' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                            <label>Email</label>
                            <input type='email' placeholder='Enter your email' required className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='mt-2'>
                            <label className='mb-2'>Age</label>
                            <input type='text' placeholder='Enter your name' required className='form-control' onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className='mt-2'>
                            <label className='mb-2'>City</label>
                            <input type='text' placeholder='Enter your name' required className='form-control' onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className='mt-2'>
                            <label className='mb-2'>Password</label>
                            <input type='text' placeholder='Enter your name' required className='form-control' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='btn btn-success w-100'>Submit</button>
                        <Link to="/home" className="btn btn-primary w-100 mt-2">
                            Home
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create

