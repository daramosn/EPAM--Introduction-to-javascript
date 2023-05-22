import { createSlice } from "@reduxjs/toolkit";

const coursesInitialState = [];

const coursesSlice = createSlice({
    name: "courses",
    initialState: coursesInitialState,
    reducers: {
        getCourses(state, action) {
            return [...action.payload];
        },
        saveNewCourse(state, action) {
            return [...state, action.payload];
        },
        updateCourse(state, action) {
            return state.map((course) =>
                course.id === action.payload.id ? action.payload : course
            );
        },
        deleteCourse(state, action) {
            console.log(`Action.payload: ${action.payload}`);
            return state.filter((course) => course.id !== action.payload);
        },
    },
});

export const coursesActions = coursesSlice.actions;

export const coursesSelector = (state) => state.courses;

export default coursesSlice;
