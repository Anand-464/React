import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Register from './components/Register'
import App from './App'
import Login from './components/Login'

const Router= createBrowserRouter([
    { path: "/" ,element: <App/>},
    { path: "/register", element: <Register/>},
    { path: "/login", element: <Login/>}
])
export default Router