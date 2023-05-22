import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import { coursesActions } from "../store/courses/slice";
import { authorsActions } from "../store/authors/slice";
import { userActions } from "../store/user/slice";
import { getAuthorsDataBase, getCoursesDataBase } from "../services";

const RootLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadDataToStore = async () => {
            const responseCourses = await getCoursesDataBase();
            responseCourses.successful &&
                dispatch(coursesActions.getCourses(responseCourses.result));

            const responseAuthors = await getAuthorsDataBase();
            responseAuthors.successful &&
                dispatch(authorsActions.getAuthors(responseAuthors.result));

            const token = JSON.parse(localStorage.getItem("TOKEN"));
            if (token !== null) {
                dispatch(
                    userActions.logIn({
                        name: token.user.name,
                        email: token.user.email,
                        token: token,
                    })
                );
            }
        };

        loadDataToStore();
    }, [dispatch]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default RootLayout;
