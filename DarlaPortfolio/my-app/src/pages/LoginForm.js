
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../pages/AuthContext';  // Adjust the path as needed
import '../css/login.css';
import { FaUserAlt, FaHome, FaEye, FaEyeSlash } from "react-icons/fa"; 
import { Link } from "react-router-dom";

function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false); 
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const { dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    const PasswordIcon = showPassword ? FaEye : FaEyeSlash; 

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3001/api/userTest/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json(); // Assuming the token and username are in the response body

            if (response.ok) {
                // Store the token in localStorage or sessionStorage
                localStorage.setItem('token', data.token); // Or sessionStorage.setItem('token', data.token);

                // Update context
                dispatch({
                    type: 'LOGIN',
                    payload: { username: formData.username }
                });

                // Redirect to home page
                navigate("/home");
            } else {
                // Handle non-OK responses and display error message from the server
                setError(data.msg || 'An unknown error occurred');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred while logging in. Please try again.');
        }
    };

    return (
        <body className="login-body">
            <div className='login-wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="login-returnHome">
                        <Link to="/home">
                            <FaHome className='homeicon'/>
                        </Link>
                    </div>
                    <div className="login-input-box">
                        <input type="text" placeholder="Username" id="username" name="username" value={formData.username} onChange={handleChange} required/>
                        <FaUserAlt className='icon'/>
                    </div>
                    <div className="login-input-box">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
                        <PasswordIcon className='icon' onClick={togglePasswordVisibility} />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    {error && <div className="error-message">{error}</div>} <br/>
                    <button type='submit'>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/registrationpage"> Register</Link> </p> 
                    </div>
                </form>
            </div>
        </body>
    )
}

export default LoginForm;
