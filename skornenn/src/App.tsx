// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Si tu veux utiliser React Router
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ajoute d'autres routes ici si nécessaire */}
      </Routes>
    </Router>
  );
};

export default App;
