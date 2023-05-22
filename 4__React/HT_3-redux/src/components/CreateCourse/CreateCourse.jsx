import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Modal from "../../UI/Modal";
import { getCurrentDate } from "../../helpers/getCurrentDate";
import { courseDuration } from "../../helpers/courseDuration";

import Input from "../../common/Input";
import Button from "../../common/Button";
import classes from "./CreateCourse.module.scss";

import { coursesActions } from "../../store/courses/slice";
import { useDispatch, useSelector } from "react-redux";
import { authorsSelector, authorsActions } from "../../store/authors/slice";

const CreateCourse = () => {
    const dispatch = useDispatch();
    const authors = useSelector(authorsSelector);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [textarea, setTextarea] = useState("");
    const [addAuthor, setAddAuthor] = useState("");
    const [authorList, setAuthorList] = useState(authors);
    const [durationTime, setDurationTime] = useState(0);
    const [courseAuthorList, setCourseAuthorList] = useState([]);
    const [modal, setModal] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        if (textarea.length < 2) {
            return setModal(true);
        }
        if (
            title.length < 2 ||
            textarea.length < 2 ||
            durationTime < 1 ||
            courseAuthorList.length === 0
        ) {
            return setModal(true);
        }
        const newCourse = {
            id: uuidv4(),
            title: title,
            description: textarea,
            creationDate: getCurrentDate(),
            duration: durationTime,
            authors: courseAuthorList.map((author) => author.id),
        };
        dispatch(coursesActions.saveNewCourse(newCourse));
        navigate("/courses");
    };

    const changeTitleHandler = (event) => setTitle(event.target.value);
    const changeTextareaHandler = (event) => setTextarea(event.target.value);
    const changeAuthorHandler = (event) => setAddAuthor(event.target.value);

    const createAuthorHandler = () => {
        if (addAuthor.length > 1) {
            const newAuthor = { id: uuidv4(), name: addAuthor };
            setAddAuthor("");
            setAuthorList((prevAuthorList) => [...prevAuthorList, newAuthor]);
            dispatch(authorsActions.saveNewAuthor(newAuthor));
        }
    };

    const addAuthorListHandler = (currentAuthor) => {
        setCourseAuthorList((prevCourseAuthorList) => [
            ...prevCourseAuthorList,
            currentAuthor,
        ]);
        setAuthorList((prevAuthorList) =>
            prevAuthorList.filter((author) => author.id !== currentAuthor.id)
        );
    };

    const deleteAuthorListHandler = (currentAuthor) => {
        setCourseAuthorList((prevCourseAuthorList) =>
            prevCourseAuthorList.filter(
                (author) => author.id !== currentAuthor.id
            )
        );
        setAuthorList((prevAuthorList) => [...prevAuthorList, currentAuthor]);
    };

    const inputDurationHandler = (event) => {
        if (event.target.value === "") {
            return setDurationTime(0);
        } else {
            setDurationTime(parseInt(event.target.value));
        }
    };

    const modalToggleHandler = () => {
        setModal((prevModal) => !prevModal);
    };

    const cancelButtonHandler = () => {
        navigate("/courses");
    };

    return (
        <>
            {modal && (
                <Modal onClickBackground={modalToggleHandler}>
                    <h3>Please fill correctly the form!</h3>
                </Modal>
            )}

            <form onSubmit={submitHandler} className={classes["new-course"]}>
                <div className={classes["new-course__actions"]}>
                    <Input
                        label={"Title"}
                        value={title}
                        placeholder={"Enter title..."}
                        onChange={changeTitleHandler}
                    />
                    <Button type={"submit"}>Create course</Button>
                    <textarea
                        className={classes["new-course__actions-textarea"]}
                        name="actions-textarea"
                        cols="30"
                        rows="10"
                        placeholder={"Enter description..."}
                        value={textarea}
                        onChange={changeTextareaHandler}
                    ></textarea>
                </div>

                <div className={classes["new-course__details"]}>
                    <div className={classes["new-course__details--one-column"]}>
                        <h4 className={classes["new-course--title"]}>
                            Add author
                        </h4>
                        <Input
                            label={"Author name"}
                            placeholder={"Enter author name..."}
                            value={addAuthor}
                            onChange={changeAuthorHandler}
                        />
                        <Button
                            type={"button"}
                            onClick={createAuthorHandler}
                            className={classes["new-course__button"]}
                        >
                            Create author
                        </Button>
                    </div>

                    <div className={classes["new-course__details--one-column"]}>
                        <h4 className={classes["new-course--title"]}>
                            Authors
                        </h4>
                        <ul className={classes["new-course--no-padding"]}>
                            {authorList.map((author) => (
                                <li
                                    className={classes["new-course__list-item"]}
                                    key={author.id}
                                >
                                    <span>{author.name}</span>
                                    <Button
                                        onClick={addAuthorListHandler.bind(
                                            null,
                                            author
                                        )}
                                    >
                                        Add author
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={classes["new-course__details--one-column"]}>
                        <h4 className={classes["new-course--title"]}>
                            Duration
                        </h4>
                        <Input
                            label={"Duration"}
                            placeholder={"Enter duration in minutes..."}
                            type={"number"}
                            onChange={inputDurationHandler}
                        />
                        <span>Duration: {courseDuration(durationTime)}</span>
                    </div>

                    <div className={classes["new-course__details--one-column"]}>
                        <h4 className={classes["new-course--title"]}>
                            Course authors
                        </h4>
                        <ul className={classes["new-course--no-padding"]}></ul>
                        {courseAuthorList?.map((author) => (
                            <li
                                className={classes["new-course__list-item"]}
                                key={author.id}
                            >
                                <span>{author.name}</span>
                                <Button
                                    onClick={deleteAuthorListHandler.bind(
                                        null,
                                        author
                                    )}
                                >
                                    Delete author
                                </Button>
                            </li>
                        ))}
                    </div>
                    <Button type={"button"} onClick={cancelButtonHandler}>
                        Cancel
                    </Button>
                </div>
            </form>
        </>
    );
};

export default CreateCourse;
