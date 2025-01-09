import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TiendaApp } from './TiendaApp.jsx';
import { BrowserRouter } from 'react-router';
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TiendaApp />
    </BrowserRouter>
  </StrictMode>,
)