import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button";
import { getAuthorsNamesList } from "../../helpers/getAuthorNamesList";

import classes from "./Courses.module.scss";
import { useSelector } from "react-redux";
import { coursesSelector } from "../../store/courses/slice";
import { authorsSelector } from "../../store/authors/slice";

const Courses = () => {
    const navigate = useNavigate();
    const authors = useSelector(authorsSelector);
    const courses = useSelector(coursesSelector);
    const [coursesList, setCoursesList] = useState(courses);

    const toCreateCourseHandler = () => {
        navigate("/courses/add");
    };

    useEffect(() => {
        setCoursesList(courses);
    }, [courses]);

    const searchHandler = (search) => {
        if (search === "") {
            setCoursesList(courses);
        } else {
            const filteredSearch = courses.filter(
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
                        authors={getAuthorsNamesList(
                            course.authors,
                            authors
                        ).join(", ")}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Courses;
