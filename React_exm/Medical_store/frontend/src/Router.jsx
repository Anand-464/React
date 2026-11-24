import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import checkAuth from './store/checkAuth';
import checkGuest from './store/checkGuest';
import Logout from './pages/Logout';

const ProtectedLogout = checkAuth(Logout);
const ProtectedDashboard = checkAuth(Dashboard);
const GuestLogin = checkGuest(Login);
const GuestRegister = checkGuest(Register);

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <GuestLogin /> },
    { path: '/logout', element: <ProtectedLogout /> },
    { path: '/register', element: <GuestRegister /> },
    { path: '/dashboard', element: <ProtectedDashboard /> },
]);

export default router;
