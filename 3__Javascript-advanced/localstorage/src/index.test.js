const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");
const { readTextFile } = require("../test-utils/readTextFile");

// VALID_EMAIL_ENDINGS constant
let VALID_EMAIL_ENDINGS_Module = null;
let VALID_EMAIL_ENDINGS = null;
try {
    VALID_EMAIL_ENDINGS_Module = require("./constants/VALID_EMAIL_ENDINGS");
    VALID_EMAIL_ENDINGS = VALID_EMAIL_ENDINGS_Module.VALID_EMAIL_ENDINGS;
} catch (error) {}

// validate
let validate = null;
let validateModule = null;
try {
    validateModule = require("./email-validator");
    validate = validateModule.validate;
} catch (error) {}

// validate
let setLocalStorage = null;
let setLocalStorageModule = null;
try {
    setLocalStorageModule = require("./localStorage-data");
    setLocalStorage = setLocalStorageModule.setLocalStorage;
} catch (error) {}

// validate
let getLocalStorage = null;
let getLocalStorageModule = null;
try {
    getLocalStorageModule = require("./localStorage-data");
    getLocalStorage = getLocalStorageModule.getLocalStorage;
} catch (error) {}

describe("LocalStorage", () => {
    let htmlString;

    let dom;
    let document;

    let virtualConsole;
    let consoleLogListener;

    beforeEach(async () => {
        consoleLogListener = jest.fn();
        virtualConsole = new VirtualConsole();
        // You can listen for other console methods as well https://github.com/jsdom/jsdom#virtual-consoles
        virtualConsole.on("log", consoleLogListener);

        const filePath = path.join(__dirname, "index.html");
        htmlString = await readTextFile(filePath);

        // Create fake DOM
        dom = new JSDOM(htmlString, {
            runScripts: "dangerously",
            resources: "usable",
            virtualConsole,
        });
        document = dom.window.document;
    });

    describe("validate", () => {
        it("should return true for given input `example@gmail.com`", () => {
            const email = "example@gmail.com";
            const result = validate(email);
            expect(result).toBeTruthy();
        });

        it("should return false for given input `@gmail.com`", () => {
            const email = "@gmail.com";
            const result = validate(email);
            expect(result).toBeFalsy();
        });

        it("should return false for given input `m@gmail.com`", () => {
            const email = "m@gmail.com";
            const result = validate(email);
            expect(result).toBeFalsy();
        });

        it("should return false for given input `example@email.com`", () => {
            const email = "example@email.com";
            const result = validate(email);
            expect(result).toBeFalsy();
        });
    });
    describe("VALID_EMAIL_ENDINGS.js", () => {
        it("should create VALID_EMAIL_ENDINGS.js file", () => {
            expect(VALID_EMAIL_ENDINGS_Module).not.toBeNull();
        });

        it("should export VALID_EMAIL_ENDINGS constant", () => {
            expect(VALID_EMAIL_ENDINGS).toStrictEqual([
                `gmail.com`,
                `outlook.com`,
                `mail.com`,
                `icloud.com`,
            ]);
        });
    });
    describe("setLocalStorage", () => {
        let localStorageMock;

        beforeEach(() => {
            localStorageMock = {
                getItem: jest.fn(),
                setItem: jest.fn(),
                clear: jest.fn(),
            };
            global.localStorage = localStorageMock;
        });

        it("should return true if email is valid", async () => {
            const result = setLocalStorage("test@gmail.com");
            expect(result).toBe(true);
        });

        it("should return false if data is empty", async () => {
            const result = setLocalStorage("");
            expect(result).toBe(false);
        });

        it("should store data in localStorage if email is valid", async () => {
            setLocalStorage("test@icloud.com");
            localStorageMock.setItem("subscriptionEmail", "test@icloud.com");
            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                "subscriptionEmail",
                "test@icloud.com"
            );
        });

        it("should not store email in localStorage if data is empty", async () => {
            setLocalStorage("");
            expect(localStorageMock.setItem).not.toHaveBeenCalled();
        });

        it("should return false if email is not valid", async () => {
            const result = setLocalStorage("test@example.com");
            expect(result).toBe(false);
        });
    });

    describe("getLocalStorage", () => {
        let localStorageMock = {};

        beforeEach(() => {
            localStorageMock = {
                getItem: jest.fn(),
                setItem: jest.fn(),
            };

            global.localStorage = localStorageMock;
        });

        it("should return empty string if subscriptionEmail is not in localStorage", () => {
            const result = getLocalStorage();
            expect(result).toBe("");
            expect(localStorageMock.getItem).toHaveBeenCalledWith(
                "subscriptionEmail"
            );
        });

        it("should return the subscriptionEmail if it is in localStorage", () => {
            const email1 = "test@mail.com";
            localStorageMock.getItem.mockImplementationOnce(() => email1);
            const result = getLocalStorage();
            expect(result).toBe(email1);
        });
    });
});
