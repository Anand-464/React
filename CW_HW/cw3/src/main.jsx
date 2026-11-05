import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Room.css'
import Room from './Room.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Room />
  </StrictMode>,
)
