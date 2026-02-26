🤖 Spring AI Chatbot — Frontend

A responsive chatbot user interface built using React.js that communicates with a Spring Boot backend API to generate AI responses.

🚀 Live Demo

Frontend URL:
https://spring-ai-chatbot-frontend.onrender.com

Backend API:
https://spring-ai-chatbot-backend.onrender.com

✨ Features

Real-time chatbot interface

API integration with Spring Boot backend

Responsive UI design

Error handling for network failures

Simple and clean chat experience

🛠️ Tech Stack

React.js

JavaScript (ES6)

HTML5 & CSS3

Fetch API

📂 Project Structure
src/
 ├── components/
 │    └── ChatComponent.js
 ├── App.js
 ├── index.js
public/
package.json
⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/asmanisha/spring-ai-chatbot-frontend.git
cd spring-ai-chatbot-frontend
2️⃣ Install Dependencies
npm install
3️⃣ Run Application
npm start

App runs at:

http://localhost:3000
🔌 Backend Connection

Frontend sends requests to:

GET /ask-ai?prompt=<message>

Example request inside React:

fetch("https://spring-ai-chatbot-backend.onrender.com/ask-ai?prompt=Hello")
❗ Common Issues
Failed to Fetch

Backend server sleeping (Render free tier)

Incorrect API URL

CORS not enabled

logo192.png 404 Error

Remove reference from manifest.json or add image inside /public.

🔮 Future Improvements

Chat history UI

Typing animation

Dark mode

Voice input

Image generation support

👩‍💻 Author

Manisha
B.Tech IT — Final Year

Architecture Diagram

<img width="1915" height="621" alt="image" src="https://github.com/user-attachments/assets/b507401f-4a26-49a3-86a8-882856cfb629" />
