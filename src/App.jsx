import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <header style={{ padding: '1rem', background: '#eee', textAlign: 'center' }}>
        <h1>My App</h1>
        <nav>
          <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

