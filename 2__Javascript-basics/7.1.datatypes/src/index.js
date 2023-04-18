/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    // Your implementation here
    if (symbolsCount > str.length) {
        return str;
    } else {
        const strSlice = str.slice(-symbolsCount);
        return strSlice + str + strSlice;
    }
    throw new Error('Task not implemented');
};

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
*/
module.exports.nearest = function nearest(z, x, y) {
    // Your implementation here
    if (Math.abs(z - x) < Math.abs(z - y)) {
        return x;
    } else {
        return y;
    }
    throw new Error('Task not implemented');
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    // Your implementation here
    const newArray = [];
    for (let value of arr) {
        if (!newArray.includes(value)) {
            newArray.push(value);
        }
    }
    return newArray;
    throw new Error('Task not implemented');
};