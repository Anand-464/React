import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Register from './pages/Register'
import Login from './pages/Login'
import StudentList from './pages/StudentList'

const Router= createBrowserRouter([
    { path: "/" ,element: <App/>},
    { path: "/register", element: <Register/>},
    { path: "/login", element: <Login/>},
    { path: "/students", element: <StudentList />},
])
export default Router