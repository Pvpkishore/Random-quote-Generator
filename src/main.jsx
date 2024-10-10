import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-slate-600 text-center mt-8 text-3xl font-bold'>Random Quote Generator</h1>
    <App />
  </StrictMode>,
)
