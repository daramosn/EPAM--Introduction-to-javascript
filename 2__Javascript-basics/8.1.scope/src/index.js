/**
 *
 * @param startValue: {Number}
 * @returns {Function}
 */
module.exports.createCounter = function createCounter(startValue = 0) {
    try {
        let count = startValue;
        return function () {
            count++;
            return count;
        }
    } catch (error) {
        throw new Error('Task not implemented ' + error);
    }
};

/**
 *
 * @param x: {Number}
 * @returns {Function}
 */
module.exports.multiply = function multiply(x) {
    return function (y) {
        return function (z) {
            let result = x * y * z;
            return result;
        }
    }
};