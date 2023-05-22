import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "./components/Logo/Logo";
import Button from "../../common/Button";
import { userActions, userSelector } from "../../store/user/slice";

import classes from "./Header.module.scss";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    const logOutHandler = () => {
        dispatch(userActions.logOut());
        navigate("/login");
    };

    return (
        <nav className={classes["header-navbar"]}>
            <ul className={classes["header-navbar__list"]}>
                <li className={classes["header-navbar__list-logo"]}>
                    <Logo />
                    <span>COURSES</span>
                </li>
                {user.isAuth && (
                    <>
                        <li className={classes["header-navbar__list-name"]}>
                            {user.name}
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
