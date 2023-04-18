import React from "react";

import classes from "./Input.module.scss";

const Input = (props) => {
    return (
        <div className={classes["custom-input"]}>
            {props.label !== undefined && (
                <label
                    htmlFor={props.label}
                    className={classes["custom-input__label"]}
                >
                    {props.label}
                </label>
            )}
            <input
                className={classes["custom-input__input"]}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                id={props.label}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;
