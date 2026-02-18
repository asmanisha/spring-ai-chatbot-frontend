import React, { useState } from "react";

function ImageGenerator() {
    const [prompt, setPrompt] = useState('');
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateImage = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:8080/generate-image?prompt=${prompt}`);
            const urls = await response.json();
            console.log( urls);
            setImageUrls(urls);

        
        } catch (error) {
            console.error("Image generation failed:", error);
            
        } 
    };

    return (
        <div className="chat-wrapper">
            <h2>Image Generator</h2>

            {/* Input Box at Bottom */}
            <div className="chat-response-box">
                {imageUrls.length > 0 ? (
                    <div className="image-grid-centered">
                        {imageUrls.map((url, index) => (
                            <img key={index} src={url} alt={`Generated ${index}`} />
                        ))}
                        {[...Array(4 - imageUrls.length)].map((_, index) => (
                    <div key={index + imageUrls.length}
                        className="empty-image-slot"></div>
                    ))}
                    </div>
                ) : (
                    <div className="chat-placeholder">Generated images will appear here.</div>
                )}
            </div>

            {/* Error or Loading */}
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            {loading && <div style={{ marginBottom: '10px' }}>Generating...</div>}

            {/* Input Area */}
            <div className="bottom-chat-input">
                <textarea
                    className="chat-textarea"
                    placeholder="Enter prompt to generate image..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={1}
                />
                <button className="send-btn" onClick={generateImage}>
                    Generate
                </button>
            </div>
        </div>
    );
}

export default ImageGenerator;
