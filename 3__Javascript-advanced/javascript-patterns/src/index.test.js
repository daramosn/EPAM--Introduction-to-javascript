const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const { waitBrowserLoadEvent } = require("../test-utils/waitBrowserEvent");

const { readTextFile } = require("../test-utils/readTextFile");

// main
let main = null;
let mainModule = null;
try {
    mainModule = require("./main");
    main = mainModule.main;
} catch (error) { }

// SectionCreator
let SectionCreator = null;
let SectionCreatorModule = null;
try {
    SectionCreatorModule = require("./join-us-section");
    SectionCreator = SectionCreatorModule.SectionCreator;
} catch (error) { }

describe("JavaScript Patterns", () => {
    let htmlString;

    let dom;
    let document;

    let virtualConsole;
    let consoleLogListener;

    let url;

    beforeEach(async () => {
        jest.resetAllMocks();

        url = "https://1.1.1.1/";
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
            url,
            virtualConsole,
        });

        document = dom.window.document;
    });

    describe("content", () => {
        let loadedSection;
        beforeEach(async () => {
            global.window = dom.window;
            global.document = document;
            main();
            await waitBrowserLoadEvent(document);

            const sections = document.querySelectorAll("section");
            let size = sections.length;
            loadedSection = sections[size - 1];
        });

        it("should create main.js file", () => {
            expect(mainModule).not.toBeNull();
        });

        it("should create join-us-section.js file", () => {
            expect(SectionCreatorModule).not.toBeNull();
        });

        it('should add an event handler for "beforeunload" event', () => {
            waitBrowserLoadEvent(document);

            main();

            const onbeforeunload = dom.window.onbeforeunload;
            expect(onbeforeunload()).toBe(false);
        });

        it("should create the section", () => {
            expect(loadedSection.tagName).toBe("SECTION");
            expect(loadedSection.classList.contains("app-section")).toBe(true);
            expect(loadedSection.textContent.trim()).not.toBeNull;
        });

        it("should create the section heading", () => {
            const heading = loadedSection.querySelector("h2");
            expect(heading).toBeDefined();
            expect(heading.innerText).toBe("Join Our Program");
        });

        it("should create the form", () => {
            const form = loadedSection.querySelector("form");
            expect(form).toBeDefined();
        });

        it("should create the email input", () => {
            const emailInput = loadedSection.querySelector(
                'input[type="email"]'
            );
            expect(emailInput).toBeDefined();
            expect(emailInput.placeholder).toBe("email");
        });

        it("should create the subscribe button", () => {
            const subscribeButton =
                loadedSection.querySelector('*[type="submit"]');
            expect(subscribeButton).toBeDefined();
            expect(subscribeButton.innerText).toBe("SUBSCRIBE");
        });

        it("should log the entered value to the console when the form is submitted", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation();
            const emailInput = loadedSection.querySelector(
                'input[type="email"]'
            );
            emailInput.value = "test@example.com";
            const button = loadedSection.querySelector('form *[type="submit"]');

            const clickEvent = new dom.window.MouseEvent("click", {
                bubbles: true,
                cancelable: true,
            });
            button.dispatchEvent(clickEvent);
            expect(consoleSpy).toHaveBeenCalledWith("test@example.com");
            consoleSpy.mockRestore();
        });
        it("should prevent the default form behavior when the Subscribe button is clicked", () => {
            function createSubmitEvent() {
                return new dom.window.Event("submit", {
                    cancelable: true,
                    bubbles: true,
                });
            }
            const emailForm = document.querySelector("form");
            const submitEvent = createSubmitEvent();
            submitEvent.preventDefault = jest.fn();

            emailForm.dispatchEvent(submitEvent);

            expect(submitEvent.preventDefault).toHaveBeenCalled();
        });
    });

    describe("Factory Method", () => {
        let factory;

        beforeEach(() => {
            factory = new SectionCreator();
        });

        it("should create a standard section", () => {
            const section = factory.create("standard");
            expect(section).toBeDefined();
            expect(section.querySelector("h2").innerText).toBe(
                "Join Our Program"
            );
            expect(section.querySelector('*[type="submit"]').innerText).toBe(
                "SUBSCRIBE"
            );
        });

        it("should create an advanced section", () => {
            const section = factory.create("advanced");
            expect(section).toBeDefined();
            expect(section.querySelector("h2").innerText).toBe(
                "Join Our Advanced Program"
            );
            expect(
                section.querySelector('button[type="submit"]').innerText
            ).toBe("Subscribe to Advanced Program");
        });

        it("should throw an error for an unknown section type", () => {
            expect(() => factory.create("unknown")).toThrowError(
                "Invalid section type"
            );
        });
        it("should remove the section from the page", () => {
            const section = factory.create("standard");

            document.body.appendChild(section);
            expect(document.body.contains(section)).toBeTruthy();
            section.remove(section);
            expect(document.body.contains(section)).toBeFalsy();
        });
    });
});
