import React, { useState } from "react";

function ChatComponent() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const askAI = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`http://localhost:8080/ask-ai?prompt=${prompt}`);
            const data = await res.text();
            setResponse(data);
            setPrompt("");
        } catch (err) {
            setResponse("Error getting response.");
            console.error(err);
        }
        setIsLoading(false);
    };

    return (
        <div className="chat-wrapper">
            <h2>Ask AI Anything</h2>
            <div className="chat-response-box">
                {isLoading ? (
                    <div className="chat-bubble">⏳ Thinking...</div>
                ) : response ? (
                    <div className="chat-bubble">{response}</div>
                ) : (
                    <div className="chat-placeholder">Ask me anything...</div>
                )}
            </div>

            <div className="bottom-chat-input">
                <textarea
                    className="chat-textarea"
                    placeholder="Type your message..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={1}
                />
                <button className="send-btn" onClick={askAI}>Send</button>
            </div>
        </div>
    );
}

export default ChatComponent;
