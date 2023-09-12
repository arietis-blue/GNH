import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Home from './Home';
import "./firebase";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login コンポーネントへのルーティング */}
        <Route path="/home" element={<Home />} /> {/* Home コンポーネントへのルーティング */}
      </Routes>
    </Router>
  );
}

export default App;
