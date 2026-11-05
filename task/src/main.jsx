import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Incre_decre from './Incre_decre.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Incre_decre />
  </StrictMode>,
)
