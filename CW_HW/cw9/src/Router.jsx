import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Register from './components/Register'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './components/Products'

const Router= createBrowserRouter([
    { path: "/" ,element: <App/>},
    { path: "/register", element: <Register/>},
    { path: "/login", element: <Login/>},
    { path: "/products", element: <Products/> }
])
export default Router