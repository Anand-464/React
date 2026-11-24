import axios from 'axios';
import { setUser, setInitialized, removeUser } from './authSlice';

const initializeAuth = async (dispatch) => {
    const refreshToken = localStorage.getItem('refresh');
    const storedUser = localStorage.getItem('user');

    if (!refreshToken || !storedUser) {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        localStorage.removeItem('user');

        dispatch(removeUser());
        dispatch(setInitialized());
        return;
    }

    try {
        const user = JSON.parse(storedUser);

        const response = await axios.post(
            'http://127.0.0.1:8000/api/accounts/token/refresh/',
            {
                refresh: refreshToken
            }
        );

        localStorage.setItem('access', response.data.access);

        if (response.data.refresh) {
            localStorage.setItem('refresh', response.data.refresh);
        }

        dispatch(setUser(user));

    } catch (error) {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        localStorage.removeItem('user');

        dispatch(removeUser());

    } finally {
        dispatch(setInitialized());
    }
};

export default initializeAuth;
