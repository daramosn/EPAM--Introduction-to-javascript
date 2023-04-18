import React from "react";

import Input from "../../common/Input";
import Button from "../../common/Button";

import classes from "./CreateCourse.module.scss";

const CreateCourse = (props) => {
    return (
        <div className={classes["new-course"]}>
            <div className={classes["new-course__actions"]}>
                <Input label={"Title"} />
                <Button>Create course</Button>
                <textarea
                    className={classes["new-course__actions-textarea"]}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
            </div>

            <div className={classes["new-course__details"]}>
                <div className={classes["new-course__add-author"]}>
                    <h4>Add author</h4>
                    <Input
                        label={"Author name"}
                        placeholder={"Enter author name..."}
                    />
                    <Button className={classes["new-course__button"]}>
                        Create author
                    </Button>
                </div>
                <div className={classes["new-course__authors-list"]}>
                    <h4>Authors</h4>
                    {/* Map author list here */}
                </div>
                <div className={classes["new-course__duration"]}>
                    <h4>Duration</h4>
                    <Input
                        label={"Duration"}
                        placeholder={"Enter duration in minutes..."}
                    />
                    <span>
                        Duration:
                        {/* duration formatted */}
                    </span>
                </div>
                <div className={classes["new-course__course-authors"]}>
                    <h4>Course authors</h4>
                    {/* Map authors added here */}
                </div>

                <Button onClick={props.onToggle}>Cancel</Button>
            </div>
        </div>
    );
};

export default CreateCourse;
