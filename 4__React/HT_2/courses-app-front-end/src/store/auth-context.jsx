import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext({
    isLogged: false,
    onLogin: () => {},
    onLogout: () => {},
});

export const AuthContextProvider = (props) => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("TOKEN");
        if (token !== null) {
            return setIsLogged(true);
        }
    }, []);

    const loginHandler = () => {
        setIsLogged(true);
    };

    const logoutHandler = () => {
        setIsLogged(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLogged: isLogged,
                onLogin: loginHandler,
                onLogout: logoutHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
