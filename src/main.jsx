import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App className="h-screen text-white min-w-[320px] max-w-full w-full"/>
  </StrictMode>,
)
