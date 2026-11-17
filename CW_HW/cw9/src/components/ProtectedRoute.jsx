import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const user = useSelector(store => store.auth.user);
    return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;