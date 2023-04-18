const assert = require('assert');
const {createCounter, multiply} = require('../src');

describe('createNumberGenerator', () => {
    it('should create generator with start value 10', () => {
        const counter = createCounter(10);
        counter();
        counter();
        assert.strictEqual(counter(), 13);
    });

    it('should create generator with default start value', () => {
        const counter = createCounter();
        counter();
        assert.strictEqual(counter(), 2);
    });
});

describe('multiply', () => {
    it('should return 48 for given input 2,4,6', () => {
        assert.strictEqual(multiply(2)(4)(6), 48);
    });

    it('should return 54 for given input 3,2,9', () => {
        assert.strictEqual(multiply(3)(2)(9), 54);
    });

    it('should return 48 for given input 16,22,2', () => {
        assert.strictEqual(multiply(16)(22)(2), 704);
    });
});
