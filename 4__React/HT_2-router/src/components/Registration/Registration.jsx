import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../common/Input";
import Button from "../../common/Button";
import { registerUser } from "../../helpers/apiRequest";

import classes from "./Registration.module.scss";
import AuthContext from "../../store/auth-context";

const Registration = (props) => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const registerSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await registerUser(
            nameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value
        );
        if (response.successful) {
            localStorage.setItem("TOKEN", nameRef.current.value);
            authCtx.onLogin();
            navigate("/courses");
        }
    };

    return (
        <form
            onSubmit={registerSubmitHandler}
            className={classes["registration-form"]}
        >
            <h1 className={classes["registration-form__title"]}>
                Registration
            </h1>
            <Input label={"Name"} placeholder={"Enter name"} ref={nameRef} />
            <Input
                type={"email"}
                label={"Email"}
                placeholder={"Enter email"}
                ref={emailRef}
            />
            <Input
                type={"password"}
                label={"Password"}
                placeholder={"Enter password"}
                ref={passwordRef}
            />
            <Button>Registration</Button>
            <p>
                If you have an account you can <Link to="/login">Login</Link>
            </p>
        </form>
    );
};

export default Registration;
