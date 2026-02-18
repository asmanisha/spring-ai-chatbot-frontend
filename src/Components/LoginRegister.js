import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";
import { FaUser, FaLock, FaEnvelope, FaLockOpen } from "react-icons/fa";
import axios from 'axios';



const LoginRegister = () => {
    const [isRegister, setIsRegister] = useState(false);
    const navigate = useNavigate();

    // Track password visibility for login & register forms
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRegisterPasswordVisible, setIsRegisterPasswordVisible] = useState(false);
    
    // State for storing password and email
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Error message state

    // Password validation regex
    const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Validate login credentials and navigate to chatbot page if valid
    const handleLogin = () => {
        if (passwordValidation.test(password)) {
            setErrorMessage(""); // Clear any previous error message
            navigate("/chatbot");
        } else {
            setErrorMessage("Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.");
        }
    };

    // Validate registration credentials and navigate to chatbot page if valid
    
    function handleSubmit(event) {
        event.preventdefault();
        axios.post('http://localhost:8081/users', {email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    const handleRegister = (e) => {
        e.preventDefault();
        
        const isValidEmail = email.includes("@gmail.com");
        if (!passwordValidation.test(registerPassword) || !isValidEmail) {
            setErrorMessage("Invalid Email or Weak Password");
            return;
        }
    
        axios.post('http://localhost:8081/register', {
            username: username,  // Now using the actual input
            email: email,
            password: registerPassword
        })
        .then(res => {
            alert(res.data.message);
            setIsRegister(false); // Switch to login form after registration
        })
        .catch(err => {
            console.error("Error Registering:", err);
        });
    };
    
    return (
        <div className="login-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/background.jpeg)` }}>
            <div className={`wrapper ${isRegister ? "active" : ""}`}>
                {/* LOGIN FORM */}
                <div className="form-box login">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FaEnvelope className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Password"
                                required
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {isPasswordVisible ? (
                                <FaLockOpen
                                    className="icon"
                                    onClick={() => setIsPasswordVisible(false)}
                                    style={{ cursor: "pointer" }}
                                />
                            ) : (
                                <FaLock
                                    className="icon"
                                    onClick={() => setIsPasswordVisible(true)}
                                    style={{ cursor: "pointer" }}
                                />
                            )}
                        </div>

                        {/* Show error message if there is one */}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                        <button type="button" onClick={handleLogin}>
                            Login
                        </button>
                        <p>
                            Don't have an account?
                            <button
                                onClick={() => setIsRegister(true)}
                                className="link-button"
                            >
                                Register
                            </button>
                        </p>
                    </form>
                </div>

                {/* REGISTER FORM */}
                <div className="form-box register">
                    <form onSubmit={handleRegister}>
                        <h1>Register</h1>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder="Username" 
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <FaUser className="icon" />
                        </div>



                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FaEnvelope className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type={isRegisterPasswordVisible ? "text" : "password"}
                                placeholder="Password"
                                required
                                autoComplete="new-password"
                                value={registerPassword}
                                onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                            {isRegisterPasswordVisible ? (
                                <FaLockOpen
                                    className="icon"
                                    onClick={() => setIsRegisterPasswordVisible(false)}
                                    style={{ cursor: "pointer" }}
                                />
                            ) : (
                                <FaLock
                                    className="icon"
                                    onClick={() => setIsRegisterPasswordVisible(true)}
                                    style={{ cursor: "pointer" }}
                                />
                            )}
                        </div>

                        {/* Show error message if there is one */}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                        <button type="button" onClick={handleRegister}>
                            Register
                        </button>
                        <p>
                            Already have an account?
                            <button
                                onClick={() => setIsRegister(false)}
                                className="link-button"
                            >
                                Login
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
