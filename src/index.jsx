import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Import the App component

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
