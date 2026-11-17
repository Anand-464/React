import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Register from './components/Register'
import Login from './components/Login'
import Products from './components/Products'
import ViewProduct from './components/ViewProduct'

const Router= createBrowserRouter([
    { path: "/" ,element: <App/>},
    { path: "/register", element: <Register/>},
    { path: "/login", element: <Login/>},
    { path: "/products", element: <Products />},
    { path: "/product/:id",element: <ViewProduct />}
])
export default Router