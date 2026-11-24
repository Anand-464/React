import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const checkGuest = (Component) => {
    function Wrapper(props) {
        const user = useSelector(store => store.auth.user);
        const initialized = useSelector(store => store.auth.initialized);
        const navigate = useNavigate();

        useEffect(() => {
            if (initialized && user) {
                navigate('/dashboard', { replace: true });
            }
        }, [user, initialized, navigate]);

        if (!initialized || user) {
            return null;
        }

        return <Component {...props} />;
    }
    return Wrapper;
};

export default checkGuest;
