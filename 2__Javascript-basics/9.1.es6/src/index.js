'use strict';

/**
 *
 * @param str: {String}
 * @returns {Boolean}
 */
const isValidJSON = (str) => {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
};

/**
 *
 * @param params: {Object}
 * @returns {String}
 */
const greeting = (params) => {
    const { name, surname, age } = params;
    return `Hello, my name is ${name} ${surname} and I am ${age} years old.`;
};

/**
 *
 * @param params: {Array}
 * @returns {Array}
 */
function unique(arr) {
    const set = new Set(arr);
    const newArray = [...set];
    return newArray;
}

/**
 * 
 * @param arr: {Array}
 * @return {Iterator}
 */
function* generator(arr) {
    for (const element of arr) {
        yield element;
    }
}

module.exports = {
    isValidJSON,
    greeting,
    unique,
    generator
};
