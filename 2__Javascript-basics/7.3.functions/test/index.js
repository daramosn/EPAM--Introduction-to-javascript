const assert = require('assert');
const {nThNoRepeatedValue, primeValues} = require('../src');

describe('nThNoRepeatedValue', () => {
    it('should return 43 as the 2nd element from given array [321, 43, 3213, 1689]', () => {
        assert.strictEqual(nThNoRepeatedValue([321, 43, 3213, 1689], 2), 43);
    });

    it('should return 4 as the 1st element from given array [1, 1, 3, 4, 3, 10]', () => {
        assert.strictEqual(nThNoRepeatedValue([1, 1, 3, 4, 3, 10], 1), 4);
    });

    it('should return 2 as the 1st element from given array [1, 2, 1, 1]', () => {
        assert.strictEqual(nThNoRepeatedValue([1, 2, 1, 1], 1), 2);
    });
});

describe('primeValues', () => {
    it('should return array of boolean for given array [4, 2, 7, 10, 13]', () => {
        assert.deepStrictEqual(primeValues([4, 2, 7, 10, 13]), [false, true, true, false, true]);
    });

    it('should return array of boolean for given array [17, 3, 21]', () => {
        assert.deepStrictEqual(primeValues([17, 3, 21]), [true, true, false]);
    });
});
