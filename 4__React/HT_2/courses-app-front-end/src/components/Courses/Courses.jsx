import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button";
import { mockedCoursesList as LIST } from "../../constants";
import { getAuthorsNamesList } from "../../helpers/getAuthor";

import classes from "./Courses.module.scss";

const Courses = () => {
    const [coursesList, setCoursesList] = useState(LIST);
    const navigate = useNavigate();

    const toCreateCourseHandler = () => {
        navigate("/courses/add");
    };

    const searchHandler = (search) => {
        if (search === "") {
            setCoursesList(LIST);
        } else {
            const filteredSearch = LIST.filter(
                (course) =>
                    course.id.toLowerCase().includes(search) ||
                    course.title.toLowerCase().includes(search)
            );
            setCoursesList(filteredSearch);
        }
    };

    return (
        <div className={classes["courses"]}>
            <section className={classes["courses__actions"]}>
                <SearchBar onSearch={searchHandler} />
                <Button onClick={toCreateCourseHandler}>Add new course</Button>
            </section>

            <ul className={classes["courses__list"]}>
                {coursesList.map((course) => (
                    <CourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        duration={course.duration}
                        creationDate={course.creationDate}
                        authors={getAuthorsNamesList(course.authors)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Courses;
