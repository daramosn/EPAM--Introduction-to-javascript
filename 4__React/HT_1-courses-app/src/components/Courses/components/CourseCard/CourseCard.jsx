import React from "react";

import Button from "../../../../common/Button";

import classes from "./CourseCard.module.scss";

const CourseCard = (props) => {
    const { title, description, duration, created, authors } = props;

    const formatDuration = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} hours`;
    };

    return (
        <li className={classes["course"]}>
            <div className={classes["course__description"]}>
                <h2 className={classes["course__description-title"]}>
                    {title}
                </h2>
                <p className={classes["course__description-content"]}>
                    {description}
                </p>
            </div>

            <div className={classes["course__details"]}>
                <p className={classes["course__details-authors"]}>
                    <span className={classes["course--bold"]}>Authors: </span>
                    {authors}
                </p>
                <p className={classes["course__details-item"]}>
                    <span className={classes["course--bold"]}>Duration: </span>
                    {formatDuration(duration)}
                </p>
                <p className={classes["course__details-item"]}>
                    <span className={classes["course--bold"]}>Created: </span>
                    {created.replaceAll("/", ".")}
                </p>

                <Button className={classes["course__button"]}>
                    Show course
                </Button>
            </div>
        </li>
    );
};

export default CourseCard;
