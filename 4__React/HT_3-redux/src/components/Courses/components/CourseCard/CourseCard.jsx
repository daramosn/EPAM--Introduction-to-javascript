import React from "react";
import { useNavigate } from "react-router-dom";

import trashIcon from "../../../../assets/trash-solid.svg";
import editIcon from "../../../../assets/pen-solid.svg";

import Button from "../../../../common/Button";

import { courseDuration } from "../../../../helpers/courseDuration";

import classes from "./CourseCard.module.scss";
import { useDispatch } from "react-redux";
import { coursesActions } from "../../../../store/courses/slice";

const CourseCard = ({ id, title, description, duration, creationDate, authors }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showCourseHandler = () => {
        navigate(`/courses/${id}`);
    };

    const deleteCourseHandler = (id) => {
        dispatch(coursesActions.deleteCourse(id));
    };

    const updateCourseHandler = () => {
        // Update course logic
        console.log("[CourseCard] updateCourseHandler");
    };

    return (
        <li className={classes["course"]}>
            <div className={classes["course__description"]}>
                <h2 className={classes["course__description-title"]}>{title}</h2>
                <p className={classes["course__description-content"]}>{description}</p>
            </div>

            <div className={classes["course__details"]}>
                <p className={classes["course__details-authors"]}>
                    <span className={classes["course--bold"]}>Authors: </span>
                    {authors}
                </p>
                <p className={classes["course__details-item"]}>
                    <span className={classes["course--bold"]}>Duration: </span>
                    {courseDuration(duration)}
                </p>
                <p className={classes["course__details-item"]}>
                    <span className={classes["course--bold"]}>Created: </span>
                    {creationDate.replaceAll("/", ".")}
                </p>

                <div className={classes["course__buttons"]}>
                    <Button
                        className={classes["course__button"]}
                        onClick={showCourseHandler}
                    >
                        Show course
                    </Button>
                    <Button
                        className={classes["course__button"]}
                        onClick={deleteCourseHandler.bind(null, id)}
                    >
                        <img
                            className={classes["course__icon"]}
                            src={trashIcon}
                            alt="trash-icon"
                        />
                    </Button>
                    <Button
                        className={classes["course__button"]}
                        onClick={updateCourseHandler}
                    >
                        <img
                            className={classes["course__icon"]}
                            src={editIcon}
                            alt="edit-icon"
                        />
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default CourseCard;
