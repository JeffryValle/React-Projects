import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterApp } from './CounterApp.jsx'
import './style.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
)
