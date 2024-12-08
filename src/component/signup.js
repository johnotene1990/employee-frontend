// import axios from 'axios'
// import React, { useState } from 'react'

// import { Link, useNavigate } from 'react-router-dom'

// const Signup = () => {
//     const [name,setName] = useState ()
//     const [email,setEmail] = useState()
//     const [password,setPassword] = useState()
//     const navigate = useNavigate()

//     const handleSubmit=((e)=>{
//         e.preventDefault();
//         // axios.post('http://localhost:8080/register',{name,email,password})
//         axios.post('https://employee-mern-api-tau.vercel.app/register','http://localhost:8081/register',{name,email,password})
//         .then(result => {
//             console.log(result)
//             navigate('/login')
//         })
//         .then(err=>console.log(err))
//     })

//   return (
//     <div>
//       <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
//         <div className='w-50 bg-white rounded p-4'>
//             <form onSubmit={handleSubmit}>
//                 <h2>Register</h2>
//                 <div className='mt-2'>
//                     <label className='mb-2'>Name</label>
//                     <input type='text' placeholder='Enter your name' className='form-control' onChange={(e)=>setName(e.target.value)} />
//                 </div>
//                 <div className='mt-3'>
//                 <label>Email</label>
//                 <input type='email' placeholder='Enter your email' className='form-control' onChange={(e)=>setEmail(e.target.value)} />
//                 </div>
//                 <div className='mt-2'>
//                     <label className='mb-2'>Password</label>
//                     <input type='text' placeholder='Enter your name' className='form-control' onChange={(e)=>setPassword(e.target.value)} />
//                 </div>
//                 <button type='submit' className='btn btn-success border w-100 mt-2 rounded-0'>Register</button>
//                 <p>Have an account?</p>
//                 <Link to={'/login'} type='submit' className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0'>login</Link>
//             </form>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Signup

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      // .post("http://localhost:8080/register", "https://employee-mern-api-tau.vercel.app/register",
      .post('/register', {name,email,password})
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
        <div className="w-50 bg-white rounded p-4">
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="mt-2">
              <label className="mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label className="mb-2">Password</label>
              <input
                type="text"
                placeholder="Enter your password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success border w-100 mt-2 rounded-0"
            >
              Register
            </button>
            <p>Have an account?</p>
            <Link
              to="/login"
              className="btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0"
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
