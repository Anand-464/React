import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import initializeAuth from "../store/auth";

function AutoLogin(props) {
    const dispatch = useDispatch();
    const started = useRef(false);

    useEffect(() => {
        if (!started.current) {
            started.current = true;
            initializeAuth(dispatch);
        }
    }, [dispatch]);

    return props.children;
}

export default AutoLogin;
