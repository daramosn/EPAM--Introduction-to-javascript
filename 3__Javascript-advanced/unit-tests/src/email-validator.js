async function validateAsync(email) {
    const validEndings = ['.com', '.co', '.org', '.net', '.edu'];
    const ending = email.slice(email.lastIndexOf('.'));
    return validEndings.includes(ending);
};

function validateWithThrow(email) {
    const validEndings = ['.com', '.co', '.org', '.net', '.edu'];
    const ending = email.slice(email.lastIndexOf('.'));
    if (validEndings.includes(ending)) {
        return true;
    } else {
        throw new Error('The provided email is invalid');
    }
};

function validateWithLog(email) {
    const validEndings = ['.com', '.co', '.org', '.net', '.edu'];
    const ending = email.slice(email.lastIndexOf('.'));
    if (validEndings.includes(ending)) {
        console.log('Valid ending');
        return true;
    } else {
        throw new Error('Invalid ending');
    }
};

module.exports = { validateAsync, validateWithThrow, validateWithLog };