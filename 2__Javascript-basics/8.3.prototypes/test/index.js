const assert = require('assert');
const {Logger} = require('../src');

describe('Logger', () => {
    let logger;

    beforeEach(() => {
        logger = new Logger();
    });

    it('should add items to log', () => {
        logger.log('Error event 1');
        logger.log('Success event');
        assert.deepStrictEqual(logger.getLog(), ['Error event 1', 'Success event'])
    });

    it('should clear log', () => {
        logger.log('Error event 1');
        logger.log('Success event');
        logger.clearLog();
        assert.deepStrictEqual(logger.getLog(), [])
    });

    it('should be empty log on initialization', () => {
        assert.deepStrictEqual(logger.getLog(), [])
    });
});

describe('shuffle', () => {
    it('should shuffle array', () => {
        const input = [1, 2, 3, 4];
        const result = input.shuffle();
        assert.notDeepStrictEqual(input, result);
    });

    it('should have same length for shuffled array', () => {
        const input = ['a', 'b', 'c'];
        const result = input.shuffle();
        assert.strictEqual(result.length, input.length);
    });

    it('should have same items in shuffled array', () => {
        const input = [1, 2, 3, 4];
        const result = input.shuffle();
        assert.deepStrictEqual(input, result.sort((a, b) => (a - b)));
    });
});
