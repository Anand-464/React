import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        initialized: false
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        },
        setInitialized: (state) => {
            state.initialized = true;
        }
    }
});

export const {setUser, removeUser, setInitialized} = authSlice.actions;

export default authSlice.reducer;
