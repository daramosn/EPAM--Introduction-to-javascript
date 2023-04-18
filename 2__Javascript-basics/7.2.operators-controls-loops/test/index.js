const assert = require('assert');
const {arrayDiff, evenOrOdd, rangeSum} = require('../src');

describe('arrayDiff', () => {
    it('should return [1,2] for given input [1,2,3], [3]', () => {
        assert.deepStrictEqual(arrayDiff([1, 2, 3], [3]), [1, 2]);
    });

    it('should return ["a"] for given input ["b", "c"], ["a", "b", "c"]', () => {
        assert.deepStrictEqual(arrayDiff(["b", "c"], ["a", "b", "c"]), ["a"]);
    });

    it('should return [1, 2, 3, 4] for given input [1, 2], [3, 4]', () => {
        assert.deepStrictEqual(arrayDiff([1, 2], [3, 4]), [1, 2, 3, 4]);
    });

    it('should return [] for given input [1, 2], [1, 2]', () => {
        assert.deepStrictEqual(arrayDiff([1, 2], [1, 2]), []);
    });
});

describe('evenOrOdd', () => {
    it('should check even odd for given input 0, 5', () => {
        assert.deepStrictEqual(evenOrOdd(0, 5), ["0 is even", "1 is odd", "2 is even", "3 is odd", "4 is even", "5 is odd"]);
    });

    it('should check even odd for given input 5, 7', () => {
        assert.deepStrictEqual(evenOrOdd(5, 7), ["5 is odd", "6 is even", "7 is odd"]);
    });

    it('should check even odd for given input 11, 14', () => {
        assert.deepStrictEqual(evenOrOdd(11, 14), ["11 is odd", "12 is even", "13 is odd", "14 is even"]);
    });
});

describe('rangeSum', () => {
    it('should return 45 for given input 5, 10', () => {
        assert.strictEqual(rangeSum(5, 10), 45);
    });

    it('should return 15 for given input 0, 5', () => {
        assert.strictEqual(rangeSum(0, 5), 15);
    });

    it('should return 1295 for given input 20, 54', () => {
        assert.strictEqual(rangeSum(20, 54), 1295);
    });

    it('should return 33 for given input 10, 12', () => {
        assert.strictEqual(rangeSum(10, 12), 33);
    });
});
