import React from "react";
import "./LogoPage.css";
import { useNavigate } from "react-router-dom";

const LogoPage = () => {
    const navigate = useNavigate();

    return (
        <div className="logo-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/chatbotbrain.webp)` }}>
            <nav>
                <img className="img1"  src="./Assets/chatboticon.png"></img>
                <ul>
                    <li><button className="login-btn">About</button></li>
                    <li><button className="login-btn">Contact Us</button></li>
                    <li><button onClick={() => navigate("/loginregister")} className="login-btn">Login</button></li>
                </ul>
            </nav>
            <div className="logo-content">
                <h1>Welcome to My Website</h1>
                <p>Your AI Assistant</p>
            </div>
        </div>
    );
};

export default LogoPage;
