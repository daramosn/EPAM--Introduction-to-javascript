/**
 *
 * @param array1: {Array}
 * @param array2: {Array}
 * @returns {Array}
 */
module.exports.arrayDiff = function arrayDiff(array1, array2) {
    try {
        const arrayConcat = [...array1, ...array2];
        const newArray = [];
        for (let value of arrayConcat) {
            let counter = 0;
            for (let value2 of arrayConcat) {
                counter += value === value2 ? 1 : 0;
            }
            if (counter === 1) {
                newArray.push(value);
            }
        }
        return newArray;
    } catch (error) {
        throw new Error('Task not implemented ' + error);
    }
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Array}
*/
module.exports.evenOrOdd = function evenOrOdd(x, y) {
    try {
        const numberList = [];
        for (let i = x; i <= y; i++) {
            if (i % 2 === 0) {
                numberList.push(`${i} is even`);
            } else {
                numberList.push(`${i} is odd`);
            }
        }
        return numberList;
    } catch (error) {
        throw new Error('Task not implemented ' + error);
    }
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum = function rangeSum(x, y) {
    try {
        let sum = 0;
        for (let i = x; i <= y; i++) {
            sum += i;
        }
        return sum;
    } catch (error) {
        throw new Error('Task not implemented ' + error);
    }
};
