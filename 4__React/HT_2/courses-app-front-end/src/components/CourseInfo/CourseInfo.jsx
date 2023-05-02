import React from "react";
import { useParams, Link } from "react-router-dom";

import { courseDuration } from "../../helpers/courseDuration";
import { getCourseById } from "../../helpers/getCourseByID";
import { getAuthorsNamesList } from "../../helpers/getAuthor";

import classes from "./CourseInfo.module.scss";

const CourseInfo = () => {
    const params = useParams();
    const course = getCourseById(params.courseId);

    return (
        <article className={classes["course-info"]}>
            <Link to="/courses" className={classes["course-info__back-link"]}>
                {"<"} Back to courses
            </Link>
            <h1 className={classes["course-info__title"]}>{course.title}</h1>
            <div className={classes["course-info__description"]}>
                <p className={classes["course-info__content"]}>
                    {course.description}
                </p>

                <div className={classes["course-info__details"]}>
                    <p>
                        <span className={classes["course-info--bold"]}>
                            ID:{" "}
                        </span>
                        {course.id}
                    </p>
                    <p>
                        <span className={classes["course-info--bold"]}>
                            Duration:{" "}
                        </span>
                        {courseDuration(course.duration)}
                    </p>
                    <p>
                        <span className={classes["course-info--bold"]}>
                            Created:{" "}
                        </span>
                        {course.creationDate.replaceAll("/", ".")}
                    </p>
                    <p>
                        <span className={classes["course-info--bold"]}>
                            Authors:{" "}
                        </span>
                        {getAuthorsNamesList(course.authors)}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default CourseInfo;
