import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import CRUD from './Stu_manag.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CRUD />
  </StrictMode>,
)
