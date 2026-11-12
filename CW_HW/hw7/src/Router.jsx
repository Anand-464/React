import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Create from "./components/Create";
import List from "./components/List";
import Edit from "./components/Edit";

const Router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/list", element: <List /> },
    { path: "/list/create", element: <Create /> },
    { path: "/list/:postId/edit", element: <Edit /> }
]);

export default Router;
