import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogoPage from "./Components/LogoPage";
import LoginRegister from "./Components/LoginRegister";
import Chatbot from "./Components/Chatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
