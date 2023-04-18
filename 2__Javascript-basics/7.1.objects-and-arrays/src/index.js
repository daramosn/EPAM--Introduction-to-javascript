/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.numberOfDuplicates = function numberOfDuplicates(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = 0; j <= i; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        newArr.push(counter);
    }
    return newArr;
    throw new Error('Task not implemented');
};

/**
 *
 * @param obj: {Object} 
 * @returns {Number}
 */
module.exports.countObjectStrength = function countObjectStrength(obj) {
    // Your implementation here
    //console.log(Object.getOwnPropertyNames(obj));
    //console.log(Object.getOwnPropertyNames(obj).map(word => typeof obj[word]));
    const propertyTypeList = Object.getOwnPropertyNames(obj).map(word => typeof obj[word]);

    let counter = 0;
    for (let propType of propertyTypeList) {
        switch (propType) {
            case 'undefined':
                counter += 0;
                break;
            case 'boolean':
                counter += 1;
                break;
            case 'number':
                counter += 2;
                break;
            case 'string':
                counter += 3;
                break;
            case 'object':
                counter += 5;
                break;
            case 'function':
                counter += 7;
                break;
            case 'bigint':
                counter += 9;
                break;
            case 'symbol':
                counter += 10;
                break;
            default:
                break;
        }
    }
    return counter;
    throw new Error('Task not implemented');
};
