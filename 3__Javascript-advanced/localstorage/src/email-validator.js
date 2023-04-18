import { VALID_EMAIL_ENDINGS as validEmails } from "./constants/VALID_EMAIL_ENDINGS";

export const validate = (email) => {
    if (email.includes('@')) {
        const text = email.split('@');
        if (text[0].length > 2 && validEmails.includes(text[1])) {
            return true;
        }
    }
    return false;
};

