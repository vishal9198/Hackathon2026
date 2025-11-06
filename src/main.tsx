import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Import the JSX App (this project has both App.tsx (placeholder) and App.jsx (full app)).
// Pointing at App.jsx ensures the full app (routes, providers) is mounted.
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
