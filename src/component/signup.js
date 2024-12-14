import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/register',
        { name, email, age, city, password }
      );
      console.log(response.data); // Ensure backend confirms data is saved
      navigate('/login');
    } catch (err) {
      console.error('Error during registration:', err);
      if (err.response) {
        // Server responded with a status other than 200 range
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
      } else if (err.request) {
        // Request was made but no response received
        console.error('Request data:', err.request);
      } else {
        // Something else happened
        console.error('Error message:', err.message);
      }
    }
  };

  return (
    <div>
      <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='w-50 bg-white rounded p-4'>
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className='mt-2'>
              <label className='mb-2'>Name</label>
              <input
                type='text'
                placeholder='Enter your name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mt-3'>
              <label>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mt-3'>
              <label>Age</label>
              <input
                type='age'
                placeholder='Enter your age'
                className='form-control'
                value={age}
                onChange={(e) => setAge(e.target.value)}
            
              />
            </div>
            <div className='mt-3'>
              <label>City</label>
              <input
                type='city'
                placeholder='Enter your city'
                className='form-control'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                
              />
            </div>
            <div className='mt-2'>
              <label className='mb-2'>Password</label>
              <input
                type='password'
                placeholder='Enter your password'
                className='form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button
              type='submit'
              className='btn btn-success border w-100 mt-2 rounded-0'
            >
              Register
            </button>
            <p>Have an account?</p>
            <Link
              to='/login'
              className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0'
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
