/**
 *
 * @param arr: {Array}
 * @param n: {Number}
 * @returns {Number}
 */
module.exports.nThNoRepeatedValue = function nThNoRepeatedValue(arr, n) {
    try {
        for (let value of arr) {
            let counter = 0;
            for (let listNumber of arr) {
                counter += value === listNumber ? 1 : 0;
            }
            if (counter === 1) {
                n--;
                if (n === 0) {
                    return value;
                }
            }
        }
    } catch (error) {
        throw new Error('Task not implemented ' + error);
    }
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.primeValues = function primeValues(arr) {
    try {
        const primeList = [];
        for (let num of arr) {
            if (num < 2) {
                primeList.push(false);
            } else {
                primeList.push(true)
                for (let i = 2; i < num; i++) {
                    if (num % i === 0) {
                        primeList.pop();
                        primeList.push(false);
                    }
                }
            }
        }
        return primeList;
    } catch (error) {

        throw new Error('Task not implemented ' + error);
    }
};
