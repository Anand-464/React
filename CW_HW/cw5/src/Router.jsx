import { createBrowserRouter } from 'react-router-dom'
import Home from './components/home'
import Student from './components/Student'

const router= createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/student/:name', element: <Student/>}
    

])
export default router