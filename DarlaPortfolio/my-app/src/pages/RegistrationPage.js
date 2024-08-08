import React, { useState } from 'react';
import '../css/register.css';
import { Link } from "react-router-dom";
import { FaHome, FaEye, FaEyeSlash } from "react-icons/fa";
import { useSignup } from '../components/useSignup';
import { useNavigate } from 'react-router-dom'; 

function RegistrationPage() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        confirmpassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 

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

    const { signup, isLoading, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validating if passwords match before sending request
        if (formData.password !== formData.confirmpassword) {
            alert("Passwords do not match.");
            return; // stopping submission if passwords don't match
        }

        try {
            const response = await fetch('http://localhost:3001/api/userTest/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // redirect to login after user register
            navigate("/login");

            const data = await response.json();
            console.log('Registration successful', data);
            // redirecting to login page or show a success message
        } catch (error) {
            console.error('Registration failed', error);
            // handles (or) displays error here
        }
    };

    return (
        <body className="registration-page">
            <div className="registration-form-container">
                <h1>Register</h1>
                <div className="register-returnHome">
                <Link to="/login">
                <FaHome className='homeicon'/>
                </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder='First Name' id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Last Name' id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Email' id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Username' id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="login-input-box">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
                        <PasswordIcon className='icon' onClick={togglePasswordVisibility} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder='Confirm Password' id="confirmpassword" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} required />
                    </div>
                    <div className="register-link">
                    <p>Already have an account? <Link to="/login"> Login </Link> </p> 
                    <br/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </body>
    )
}

export default RegistrationPage;