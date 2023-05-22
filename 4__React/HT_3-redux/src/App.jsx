import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" /> },
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "login", element: <Login /> },
            { path: "registration", element: <Registration /> },

            {
                path: "courses",
                element: <PrivateRoute redirectPath={"/login"} />,
                children: [
                    { index: true, element: <Courses /> },
                    { path: "add", element: <CreateCourse /> },
                    { path: ":courseId", element: <CourseInfo /> },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
