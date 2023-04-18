const assert = require('assert');
const { numberOfDuplicates, countObjectStrength } = require('../src');

describe('numberOfDuplicates', () => {
    it('should count number of duplicates for given array [1, 2, 1, 1, 3]', () => {
        assert.deepStrictEqual(numberOfDuplicates([1, 2, 1, 1, 3]), [1, 1, 2, 3, 1]);
    });

    it('should count number of duplicates for given array [\'a\', \'a\', \'aa\', \'a\', \'aa\']', () => {
        assert.deepStrictEqual(numberOfDuplicates(['a', 'a', 'aa', 'a', 'aa']), [1, 2, 1, 3, 2]);
    });

    it('should count number of duplicates for given array [1, -3, -3]', () => {
        assert.deepStrictEqual(numberOfDuplicates([1, -3, -3]), [1, 1, 2]);
    });
});

describe('countObjectStrength', () => {
    it('should count object strengths for given object Array', () => {
        assert.strictEqual(countObjectStrength(Array), 31);
    });

    it('should count object strengths for given object Array.prototype', () => {
        assert.strictEqual(countObjectStrength(Array.prototype), 233);
    });

    it('should count object strengths for given object []', () => {
        assert.strictEqual(countObjectStrength([]), 2);
    });

    it('should count object strengths for given object {some: \'value\'}', () => {
        assert.strictEqual(countObjectStrength({some: 'value'}), 3);
    });
});
