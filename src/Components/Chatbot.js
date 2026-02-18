import React, { useState } from "react";
import ImageGenerator from "./ImageGenerator";
import ChatComponent from "./ChatComponent";
import RecipeGenerator from "./RecipeGenerator";

import "./Chatbot.css"; // Ensure you have styles

function Chatbot() {
    const [activeTab, setActiveTab] = useState("image-generator");

    return (
        <div className="chatbot-container" >
            <div className="tab-buttons">
                <button className={activeTab === "image-generator" ? "active" : ""}
                    onClick={() => setActiveTab("image-generator")}>
                    🖼️ Image Generator
                </button>
                <button className={activeTab === "chat" ? "active" : ""}
                    onClick={() => setActiveTab("chat")}>
                    💬 Ask AI
                </button>
                <button className={activeTab === "recipe-generator" ? "active" : ""}
                    onClick={() => setActiveTab("recipe-generator")}>
                    🍽️ Recipe Generator
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "image-generator" && <ImageGenerator />}
                {activeTab === "chat" && <ChatComponent />}
                {activeTab === "recipe-generator" && <RecipeGenerator />}
            </div>
        </div>
    );
}

export default Chatbot;
