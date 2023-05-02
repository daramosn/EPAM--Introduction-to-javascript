import { mockedCoursesList as COURSES } from "../constants";

export const getCourseById = (id) => {
    return COURSES.filter((course) => course.id === id)[0];
};
