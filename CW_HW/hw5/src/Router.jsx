import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';

const router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/home', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '/contact', element: <Contact/>},
]);

export default router;