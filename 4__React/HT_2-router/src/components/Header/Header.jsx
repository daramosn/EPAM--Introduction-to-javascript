import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "./components/Logo/Logo";
import Button from "../../common/Button";
import AuthContext from "../../store/auth-context";

import classes from "./Header.module.scss";

const Header = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const userName = localStorage.getItem("TOKEN");

    const logOutHandler = () => {
        localStorage.removeItem("TOKEN");
        authCtx.onLogout();
        navigate("/login");
    };

    return (
        <nav className={classes["header-navbar"]}>
            <ul className={classes["header-navbar__list"]}>
                <li className={classes["header-navbar__list-logo"]}>
                    <Logo />
                    <span>COURSES</span>
                </li>
                {authCtx.isLogged && (
                    <>
                        <li className={classes["header-navbar__list-name"]}>
                            {userName}
                        </li>
                        <li>
                            <Button onClick={logOutHandler}>Log out</Button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Header;
