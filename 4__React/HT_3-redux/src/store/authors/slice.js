import { createSlice } from "@reduxjs/toolkit";

const authorsInitialState = [];

const authorsSlice = createSlice({
    name: "authors",
    initialState: authorsInitialState,
    reducers: {
        getAuthors(state, action) {
            return [...action.payload];
        },
        saveNewAuthor(state, action) {
            return [...state, action.payload];
        },
    },
});

export const authorsActions = authorsSlice.actions;

export const authorsSelector = (state) => state.authors;

export default authorsSlice;
