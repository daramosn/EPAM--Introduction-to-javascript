const assert = require('assert');
const {isValidJSON, greeting, unique, generator} = require('../src');

describe('isValidJSON', () => {
  it('should return true for given input [1, 2, 3]', () => {
    assert.strictEqual(isValidJSON('[1, 2, 3]'), true);
  });

  it('should return false for given input [1 2 3]', () => {
    assert.strictEqual(isValidJSON('[1 2 3]'), false);
  });

  it('should return false for given input {a: 2}', () => {
    assert.strictEqual(isValidJSON('{a: 2}'), false);
  });

  it('should return true for given input {"a": 2}', () => {
    assert.strictEqual(isValidJSON('{"a": 2}'), true);
  });
});

describe('greeting', () => {
  it('should prepare string for given input {name: "Bill", surname: "Jacobson", age: 33}', () => {
    assert.strictEqual(greeting({name: 'Bill', surname: 'Jacobson', age: 33}), 'Hello, my name is Bill Jacobson and I am 33 years old.');
  });

  it('should prepare string for given input {name: "Jim", surname: "Power", age: 11}', () => {
    assert.strictEqual(greeting({name: 'Jim', surname: 'Power', age: 11}), 'Hello, my name is Jim Power and I am 11 years old.');
  });
});

describe('unique numbers', () => {
    it('should return array [1, 2, 3] for given array [1, 2, 1, 1, 3]', () => {
        assert.deepStrictEqual(unique([1, 2, 1, 1, 3]), [1, 2, 3]);
    });

    it('should return array [\'a\', \'aa\'] for given array [\'a\', \'a\', \'aa\', \'a\', \'aa\']', () => {
        assert.deepStrictEqual(unique(['a', 'a', 'aa', 'a', 'aa']), ['a', 'aa']);
    });

    it('should return array [1, -3] for given array [1, -3, -3]', () => {
        assert.deepStrictEqual(unique([1, -3, -3]), [1, -3]);
    });
});

describe('generator', () => {
    it('should return iterator', () => {
        const it = generator([1, 2]);
        assert.strictEqual(it.next().value, 1); 
        assert.strictEqual(it.next().value, 2); 
        assert.strictEqual(it.next().value, undefined); 
    });
});
