import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "./authSlice";

const checkAuth = (Component) => {
    function Wrapper(props) {
        const user = useSelector(store => store.auth.user);
        const initialized = useSelector(store => store.auth.initialized);
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            if (!initialized) {
                navigate('/login');
                return;
            }
            if (!user) {
                navigate('/login');
                return;
            }
            if (window.location.pathname === '/logout') {
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                localStorage.removeItem("user");

                dispatch(removeUser());
                navigate('/login');
            }

        }, [user, initialized, navigate, dispatch]);

        if (!initialized || !user) {
            return null;
        }
        return <Component {...props} />;
    }
    return Wrapper;
};

export default checkAuth;
