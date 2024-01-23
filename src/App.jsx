import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Test from './pages/Test.jsx';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
