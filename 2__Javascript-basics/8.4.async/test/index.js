const assert = require('assert');
const {describe, beforeEach} = require("mocha");
const {mocker, summarize1, summarize2, w, callback1, callback2} = require('../src');

describe('strategies', () => {

    it('should return 3 for a string "1 2 3" when apply callback1', () => {
        const result = w('1 2 3', callback1);
        assert.strictEqual(result, 3);
    });

    it('should return 6 for a string "1 22 333" when apply callback1', () => {
        const result = w('1 22 333', callback1);
        assert.strictEqual(result, 6);
    });

    it('should return 1 for a string "1 2 3" when apply callback2', () => {
        const result = w('1 2 3', callback2);
        assert.strictEqual(result, 1);
    });

    it('should return 24 for a string "1 22 333 4444" when apply callback1', () => {
        const result = w('1 22 333 4444', callback2);
        assert.strictEqual(result, 24);
    });

    it('should return 2 for a string "11" when apply callback1', () => {
        const result = w('11', callback1);
        assert.strictEqual(result, 2);
    });

    it('should return 2 for a string "11" when apply callback2', () => {
        const result = w('11', callback2);
        assert.strictEqual(result, 2);
    });
});

describe('mocker', () => {
    describe('users mocker', () => {
        const usersData = [{id: 1, login: 'mickey'}, {id: 2, login: 'billy77'}, {id: 3, login: 'coooool123'}];
        let getUsers;

        beforeEach(() => {
            getUsers = mocker(usersData);
        });

        it('should return users data', async () => {
            const resultData = await getUsers();
            assert.deepStrictEqual(resultData, usersData);
        });

        it('should return users data in asynchronous way', () => {
            const resultData = getUsers();
            assert.notDeepStrictEqual(resultData, usersData);
        });
    });
});

describe('summarize1', () => {
    it('should return 9 for given promises', async () => {
        const promise1 = Promise.resolve(9);
        const res = await summarize1(promise1);
        assert.strictEqual(res, 9);
    });

    it('should return 6 for given promises', async () => {
        const promise1 = Promise.resolve(2);
        const promise2 = Promise.resolve(4);
        const res = await summarize1(promise1, promise2);
        assert.strictEqual(res, 6);
    });

    it('should return 11 for given promises', async () => {
        const promise1 = Promise.resolve(3);
        const promise2 = new Promise(resolve => resolve(9));
        const res = await summarize1(promise1, promise2);
        assert.strictEqual(res, 12);
    });

    it('should return 16 for given promises', async () => {
        const promise1 = Promise.resolve(10);
        const promise2 = new Promise(resolve => resolve(5));
        const promise3 = new Promise(resolve => {setTimeout(() => {resolve(1)}, 300)});
        const res = await summarize1(promise1, promise2, promise3);
        assert.strictEqual(res, 16);
    });
});

describe('summarize2', () => {
    it('should return 9 for given promises', async () => {
        const promise1 = Promise.resolve(9);
        const res = await summarize2(promise1);
        assert.strictEqual(res, 9);
    });

    it('should return 6 for given promises', async () => {
        const promise1 = Promise.resolve(2);
        const promise2 = Promise.resolve(4);
        const res = await summarize2(promise1, promise2);
        assert.strictEqual(res, 6);
    });

    it('should return 11 for given promises', async () => {
        const promise1 = Promise.resolve(3);
        const promise2 = new Promise(resolve => resolve(9));
        const res = await summarize2(promise1, promise2);
        assert.strictEqual(res, 12);
    });

    it('should return 16 for given promises', async () => {
        const promise1 = Promise.resolve(10);
        const promise2 = new Promise(resolve => resolve(5));
        const promise3 = new Promise(resolve => {setTimeout(() => {resolve(1)}, 300)});
        const res = await summarize2(promise1, promise2, promise3);
        assert.strictEqual(res, 16);
    });

    it('should return 23 for given promises', async () => {
        const promise1 = Promise.resolve(11);
        const promise2 = new Promise(resolve => resolve(7));
        const promise3 = new Promise(resolve => {setTimeout(() => {resolve(5)}, 500)});
        const res = await summarize2(promise1, promise2, promise3);
        assert.strictEqual(res, 23);
    });

    it('should return 16 for given promises', async () => {
        const promise1 = new Promise(resolve => {setTimeout(() => {resolve(1)}, 500)});
        const promise2 = new Promise(resolve => {setTimeout(() => {resolve(3)}, 500)});
        const promise3 = new Promise(resolve => {setTimeout(() => {resolve(5)}, 500)});
        const promise4 = new Promise(resolve => {setTimeout(() => {resolve(7)}, 500)});
        const res = await summarize2(promise1, promise2, promise3, promise4);
        assert.strictEqual(res, 16);
    });

    it('should return 42 for given promises', async () => {
        const promise1 = Promise.resolve(21);
        const promise2 = Promise.resolve(21);
        const res = await summarize2(promise1, promise2);
        assert.strictEqual(res, 42);
    });
});
