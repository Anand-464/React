import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",

    initialState: {
        email: "",
        token: ""
    },

    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },

        removeUser: (state) => {
            state.email = "";
            state.token = "";
        }
    }
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;