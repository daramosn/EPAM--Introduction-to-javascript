/**
 *
 * @param data: {Array}
 * @returns number
 */
module.exports.callback1 = function (data) {
    let result = 0;
    for (let elem of data) {
        result += elem;
    }
    return result;
};

/**
 *
 * @param data: {Array}
 * @returns number
 */
module.exports.callback2 = function (data) {
    let result = 1;
    for (let elem of data) {
        result *= elem;
    }
    return result;
};

/**
 *
 * @param s: {string}
 * @returns number
 */
module.exports.w = function (s, callback) {
    const array = s.split(' ');
    const arrayLengths = array.map(word => +word.length);
    return callback(arrayLengths);
};

/**
 *
 * @param data: {Array | Object}
 * @returns {Function}
 */
module.exports.mocker = function mocker(data) {
    return () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    };
}

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
 */
module.exports.summarize1 = function summarize1(...promises) {
    return Promise.all(promises)
        .then((resolved) => {
            let sum = 0;
            for (const value of resolved) {
                sum += value;
            }
            return sum;
        })
        .catch((error) => {
            throw new Error(error);
        })
};

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
*/
module.exports.summarize2 = async function summarize2(...promises) {
    try {
        const responses = await Promise.all(promises);
        let sum = 0;
        for (const value of responses) {
            sum += value;
        }
        return sum;
    } catch (error) {
        throw new Error(error);
    }
};
