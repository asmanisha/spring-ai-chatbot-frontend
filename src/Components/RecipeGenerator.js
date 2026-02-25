import React, { useState } from "react";

function RecipeGenerator() {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const createRecipe = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://spring-ai-chatbot-backend.onrender.com/recipe-creator?ingredients=${encodeURIComponent(ingredients)}&dietaryRestrictions=${encodeURIComponent(dietaryRestrictions)}&cuisine=${encodeURIComponent(cuisine)}`
            );
            const data = await response.text();
            setRecipe(data);
        } catch (error) {
            console.error("Error generating recipe:", error);
        }
        setIsLoading(false);
    };

    return (
        <div className="tab-content chat-wrapper">
            <h2>AI-Powered Recipe Generator</h2>

            <div className="chat-response-box">
                {isLoading ? (
                    <div className="chat-bubble">⏳ Thinking...</div>
                ):recipe ? (
                    <div className="chat-bubble">
                        {recipe}
                    </div>
                ) : (
                    <div className="chat-placeholder">Your recipe will appear here...</div>
                )}
            </div>

            <div className="bottom-chat-input">
                <textarea
                    className="chat-textarea"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Ingredients (comma separated)"
                />
                <textarea
                    className="chat-textarea"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    placeholder="Cuisine type (optional)"
                />
                <textarea
                    className="chat-textarea"
                    value={dietaryRestrictions}
                    onChange={(e) => setDietaryRestrictions(e.target.value)}
                    placeholder="Dietary restrictions (optional)"
                />
                <button className="send-btn" onClick={createRecipe}>Generate 
                    Recipe</button>
            </div>
        </div>
    );
}

export default RecipeGenerator;
