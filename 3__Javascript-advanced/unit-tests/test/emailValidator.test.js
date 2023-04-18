const sinon = require('sinon');
const { validateAsync, validateWithThrow, validateWithLog } = require('../src/email-validator.js');
const { expect } = require('chai');

describe("Email validator testing", () => {

    describe('Validation asyncValidate', () => {

        it("Should return true for test@example.com", async () => {
            const result = await validateAsync("test@example.com");
            expect(result).to.be.true;
        });
        it("Should return true for email@example.org", async () => {
            const result = await validateAsync("email@example.org");
            expect(result).to.be.true;
        });
        it("Should return false for test@example.con", async () => {
            const result = await validateAsync("test@example.con");
            expect(result).to.be.false;
        });
        it("Should return false for an empty string", async () => {
            const result = await validateAsync("");
            expect(result).to.be.false;
        });
    });

    describe('Validation with throw', () => {

        it("Should return true for test@example.com", () => {
            const result = validateWithThrow("test@example.com");
            expect(result).to.be.true;
        });
        it("Should return true for email@example.org", () => {
            const result = validateWithThrow("email@example.org");
            expect(result).to.be.true;
        });
        it("Should throw error for test@example.con", () => {
            expect(() => {
                validateWithThrow("test@example.con");
            })
                .to.throw('The provided email is invalid');
        });
        it("Should throw error for an empty string", () => {
            expect(() => {
                validateWithThrow('');
            })
                .to.throw('The provided email is invalid');
        });
    });

    describe('Validation log', () => {

        let stubLog;

        beforeEach(() => {
            stubLog = sinon.stub(console, 'log');
        });
        afterEach(() => {
            stubLog.restore();
        });

        it("Should return true for test@example.com", () => {
            const result = validateWithLog("test@example.com");
            expect(stubLog.calledWith('Valid ending')).to.be.true;
            expect(result).to.be.true;
        });

        it("Should throw error for test@example.email", () => {
            try {
                validateWithLog('test@example.email');
            } catch (error) {
                expect(stubLog.notCalled).to.be.true;
                expect(error.message).to.equal('Invalid ending');
            }
        });

    });
});