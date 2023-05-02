import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../common/Input";
import Button from "../../common/Button";
import AuthContext from "../../store/auth-context";
import { loginUser } from "../../helpers/apiRequest";

import classes from "./Login.module.scss";

const Login = () => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const loginSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await loginUser(
            emailRef.current.value,
            passwordRef.current.value
        );
        if (response.successful) {
            localStorage.setItem("TOKEN", response.user.name);
            authCtx.onLogin();
            navigate("/courses");
        }
    };

    return (
        <form onSubmit={loginSubmitHandler} className={classes["login-form"]}>
            <h1 className={classes["login-form__title"]}>Login</h1>
            <Input label={"Email"} placeholder={"Enter email"} ref={emailRef} />
            <Input
                type={"password"}
                label={"Password"}
                placeholder={"Enter password"}
                ref={passwordRef}
            />
            <Button>Login</Button>
            <p>
                If you don't have an account you can{" "}
                <Link to="/registration">Registration</Link>
            </p>
        </form>
    );
};

export default Login;
