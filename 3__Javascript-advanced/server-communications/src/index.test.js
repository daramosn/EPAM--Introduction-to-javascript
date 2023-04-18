const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const { readTextFile } = require("../test-utils/readTextFile");
const { waitBrowserLoadEvent } = require("../test-utils/waitBrowserEvent");
const {
    addFileProtocolToElements,
} = require("../test-utils/addFileProtocolToElements");
const {
    replaceScriptSrcFilePathInString,
} = require("../test-utils/replaceScriptSrcFilePathInString");

describe("Server communications", () => {
    let htmlString;

    let dom;
    let document;

    let virtualConsole;
    let consoleLogListener;

    let fetchMock;

    beforeEach(async () => {
        jest.resetAllMocks();
        consoleLogListener = jest.fn();
        virtualConsole = new VirtualConsole();
        virtualConsole.on("log", consoleLogListener);
        fetchMock = jest.fn();

        const filePath = path.join(__dirname, "../test-utils/index-test.html");
        htmlString = await readTextFile(filePath);
        const newHtmlString = replaceScriptSrcFilePathInString(
            htmlString,
            ["script.js"],
            __dirname
        );

        // Create fake DOM
        dom = new JSDOM(newHtmlString, {
            url: "https://www.site-test-domain.com/path/?query-one=one&query-two=two",
            runScripts: "dangerously",
            resources: "usable",
            virtualConsole,
        });
        document = dom.window.document;
        dom.window.fetch = fetchMock;

        const linkElements = document.querySelectorAll(
            'link[rel="stylesheet"]'
        );
        addFileProtocolToElements(linkElements, "href", __dirname);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("getRandomUsers", () => {
        let quantity;
        let nationalities;
        let results;

        describe('when "quantity" and "nationalities" parameters are passed', () => {
            beforeEach(() => {
                quantity = 10;
                nationalities = "UA,US";
                results = createResults(quantity, nationalities);
                const resultsPromise = Promise.resolve({ results });
                const response = {
                    json: () => resultsPromise,
                };
                const responsePromise = Promise.resolve(response);

                fetchMock.mockReturnValue(responsePromise);
            });

            it("should fetch random users with correct params", async () => {
                await waitBrowserLoadEvent(document);
                await dom.window.getRandomUsers(quantity, nationalities);

                const expectedURL = `https://randomuser.me/api/?results=${quantity}&nat=${nationalities}&inc=name,email,nat&noinfo`;

                expect(fetchMock).toHaveBeenCalledWith(expectedURL);
            });

            it("should return results in the returned promise", async () => {
                await waitBrowserLoadEvent(document);
                const actualUsers = await dom.window.getRandomUsers(
                    quantity,
                    nationalities
                );

                expect(actualUsers).toBe(results);
            });
        });

        describe('when "quantity" and "nationalities" parameters are not passed', () => {
            beforeEach(() => {
                results = createResults(1, "NZ");
                const resultsPromise = Promise.resolve({ results });
                const response = {
                    status: 200,
                    json: () => resultsPromise,
                };
                const responsePromise = Promise.resolve(response);

                fetchMock.mockReturnValue(responsePromise);
            });

            it("should fetch random users with correct params", async () => {
                await waitBrowserLoadEvent(document);
                await dom.window.getRandomUsers();

                const expectedURL = `https://randomuser.me/api/?results=1&nat=&inc=name,email,nat&noinfo`;

                expect(fetchMock).toHaveBeenCalledWith(expectedURL);
            });

            it("should return results in the returned promise", async () => {
                await waitBrowserLoadEvent(document);
                const actualUsers = await dom.window.getRandomUsers();

                expect(actualUsers).toBe(results);
            });
        });

        function createResults(amount, nat) {
            let results = [];
            for (let i = 0; i < amount; i++) {
                const name = `user${i}`;
                const user = {
                    email: `${name}@example.com`,
                    name: {
                        first: name,
                        last: `Last ${name}`,
                        titls: "Ms",
                    },
                    nat,
                };

                results.push(user);
            }

            return results;
        }
    });

    describe("createPost", () => {
        let data;
        let post;

        beforeEach(() => {
            data = {
                title: "Post",
                body: "description",
                userId: 1,
            };

            post = Object.assign({ id: 1010 }, data);

            const postPromise = Promise.resolve(post);
            const response = {
                status: 200,
                json: () => postPromise,
            };

            fetchMock.mockReturnValue(Promise.resolve(response));
        });

        it("should call https://jsonplaceholder.typicode.com/posts", async () => {
            await waitBrowserLoadEvent(document);
            await dom.window.createPost(data);
            const expectedURL = "https://jsonplaceholder.typicode.com/posts";

            expect(fetchMock).toHaveBeenCalledWith(
                expectedURL,
                expect.anything()
            );
        });

        it('should pass correct "body" and "method"', async () => {
            await waitBrowserLoadEvent(document);
            await dom.window.createPost(data);
            const expectedBody = JSON.stringify(data);

            expect(fetchMock).toHaveBeenCalledWith(
                expect.anything(),
                expect.objectContaining({
                    method: "POST",
                    body: expectedBody,
                })
            );
        });

        it("should pass correct Content-Type header", async () => {
            await waitBrowserLoadEvent(document);
            await dom.window.createPost(data);

            const options = fetchMock.mock.calls[0][1];
            const headers = options.headers;

            const headersKeys = Object.keys(headers);
            const contentTypeKey = headersKeys.find((key) =>
                /content-type/i.test(key)
            );
            const contentTypeValue = headers[contentTypeKey];

            const correctContentTypeRegExp =
                /application\/json; *charset=utf-8/gi;

            const hasCorrectContentTypeHeader = correctContentTypeRegExp.test(
                contentTypeValue.trim()
            );

            expect(hasCorrectContentTypeHeader).toBe(true);
        });

        it("should return data which was created", async () => {
            await waitBrowserLoadEvent(document);
            const actualPost = await dom.window.createPost({
                title: "Post",
                body: "description",
                userId: 1,
            });

            expect(actualPost).toEqual(post);
        });
    });
});
