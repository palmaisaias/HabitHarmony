import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router'; // Importing the router
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for consistent styling
import './styles/index.css'; // Import global CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter /> {/* Rendering the main router component */}
  </React.StrictMode>
);
