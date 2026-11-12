import Aboutus from "./components/Aboutus";
import App from "./App";
import Contactus from "./components/Contactus";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'contactus', element: <Contactus/>}
]);

export default router;