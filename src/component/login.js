import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please fill in both email and password fields.');
            return;
        }

        axios.post('https://employee-frontend-ksjs.onrender.com/login', { email, password })
            .then(result => {
                console.log('Server response:', result.data);
                if (result.data === 'success') {
                    navigate('/home');
                } else {
                    alert('Invalid credentials. Please try again.');
                }
            })
            .catch(err => {
                console.error('Login error:', err);
                alert('An error occurred during login. Please try again later.');
            });
    };

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
            <div className="w-50 bg-white rounded p-4">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
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
                            type="password"
                            placeholder="Enter your password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success mt-3">Login</button>
                    <p>Don't have an account?</p>
                    <Link
                        to="/"
                        className="btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0"
                    >
                        Register
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;


