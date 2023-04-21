import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "../../common/Input";
import Button from "../../common/Button";

import { mockedAuthorsList as AUTHORS } from "../../constants";

import classes from "./CreateCourse.module.scss";
import { courseDuration } from "../../helpers/courseDuration";

const CreateCourse = (props) => {
    const [durationTime, setDurationTime] = useState("00:00 hours");
    const [addAuthor, setAddAuthor] = useState("");
    const [authorList, setAuthorList] = useState(AUTHORS);

    const submitHandler = (event) => {
        event.preventDefault();
    };

    const inputDurationHandler = (event) => {
        if (event.target.value === "") {
            return setDurationTime("00:00 hours");
        } else {
            setDurationTime(courseDuration(event.target.value));
        }
    };

    const addAuthorHandler = (event) => {
        setAddAuthor(event.target.value);
    };

    const createAuthorHandler = () => {
        if (addAuthor.length > 1) {
            const newAuthor = { id: uuidv4(), name: addAuthor };
            setAuthorList((prevAuthorList) => [...prevAuthorList, newAuthor]);
            setAddAuthor("");
        }
        return;
    };

    return (
        <form onSubmit={submitHandler} className={classes["new-course"]}>
            <div className={classes["new-course__actions"]}>
                <Input label={"Title"} />
                <Button type={"submit"}>Create course</Button>
                <textarea
                    className={classes["new-course__actions-textarea"]}
                    name="actions-textarea"
                    id="actions-textarea"
                    cols="30"
                    rows="10"
                ></textarea>
            </div>

            <div className={classes["new-course__details"]}>
                <div className={classes["new-course__details--one-column"]}>
                    <h4 className={classes["new-course--title"]}>Add author</h4>
                    <Input
                        label={"Author name"}
                        placeholder={"Enter author name..."}
                        value={addAuthor}
                        onChange={addAuthorHandler}
                    />
                    <Button
                        onClick={createAuthorHandler}
                        className={classes["new-course__button"]}
                    >
                        Create author
                    </Button>
                </div>

                <div className={classes["new-course__details--one-column"]}>
                    <h4 className={classes["new-course--title"]}>Authors</h4>
                    <ul className={classes["new-course--no-padding"]}>
                        {authorList.map((author) => (
                            <li
                                className={classes["new-course__list-item"]}
                                key={author.id}
                            >
                                <span>{author.name}</span>
                                <Button>Add author</Button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={classes["new-course__details--one-column"]}>
                    <h4 className={classes["new-course--title"]}>Duration</h4>
                    <Input
                        label={"Duration"}
                        placeholder={"Enter duration in minutes..."}
                        type={"number"}
                        onChange={inputDurationHandler}
                    />
                    <span>Duration: {durationTime}</span>
                </div>

                <div className={classes["new-course__details--one-column"]}>
                    <h4 className={classes["new-course--title"]}>
                        Course authors
                    </h4>
                    <ul className={classes["new-course--no-padding"]}></ul>
                    {/* Map authors added here */}
                </div>
                <Button type={"button"} onClick={props.onToggle}>
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default CreateCourse;
