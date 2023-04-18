import { validate } from "./email-validator";

export const setLocalStorage = (email) => {
    if (validate(email)) {
        localStorage.setItem("subscriptionEmail", email);
        return true;
    }
    return false;
};


export const getLocalStorage = () => {
    const email = localStorage.getItem("subscriptionEmail");
    if (email === null || email === undefined) {
        return "";
    } else {
        return email;
    }
};