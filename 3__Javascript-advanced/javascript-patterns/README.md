# JavaScript Patterns

## Write functions to work with DOM.

## Before we start

1. This practical task is verified automatically with tests.
2. Please, don't change the page structure, if it is not required for a task. It may affect tests.

## Development

Note! While developing, you can open `src/index.html` in your browser with "live server" to check your solution. We have also prepared a convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Run JavaScript code in RunJS application

`RunJS` is a JavaScript and TypeScript playground for desktop operating systems. It runs code as it's written and displays formatted results in the output panel on the right.

![RunJS application in work](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/images/runjs-intro.png)

RunJS is available on macOS, Windows, and Linux.

Here are detailed instructions how to install and use it: [RunJS documentation](https://runjs.app/docs).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

Move your version of the project created in previous task to this project.

Create a file named join-us-section.js.
Move the logic for creating the Join Our Program section to the join-us-section.js. The initialization logic should occur in the main.js file. In order to do that, join-us-section.js should implement the Module pattern and expose (using a JavaScript export statement) its functionality which should then be used in the main.js file and function main.

Using the knowledge about the Factory method pattern, implement the SectionCreator factory which allows to create (create(type) method) two types of programs: standard and advanced. The standard type creates a program implemented using a [mockup](https://www.figma.com/file/MnzJnLZtw6FBVcYQD8SQbx/JavaScript-advanced?node-id=1%3A5&t=rlbgIO3PyKhr4alZ-0).
The advanced type does the same but its title text is Join Our Advanced Program and the submit button text is Subscribe to Advanced Program. The created programs should have the remove() method to remove the created section from the page.
Use the standard section type in the main.js file so after the task is done, the UI is not changed since the previous task.
