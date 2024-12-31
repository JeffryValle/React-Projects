import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { RestaurantApp } from './RestaurantApp.jsx';
import { BrowserRouter } from 'react-router';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <RestaurantApp />
  </StrictMode>,
  </BrowserRouter>
)
