import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './styles.css'
import { ToDoApp } from './ToDoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoApp />
  </StrictMode>,
)
