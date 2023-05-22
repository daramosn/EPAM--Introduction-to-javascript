import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
    isAuth: false,
    name: "",
    email: "",
    token: "",
};

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        logIn(state, action) {
            state.isAuth = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        logOut(state) {
            // Object.assign(state, userInitialState);
            state.isAuth = false;
            state.name = "";
            state.email = "";
            state.token = "";
            localStorage.removeItem("TOKEN");
        },
    },
});

export const userActions = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice;
