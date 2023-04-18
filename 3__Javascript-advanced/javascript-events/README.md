# JavaScript Events

## Write functions to work with DOM and events.

## Before we start

1. This practical task is verified automatically with tests.
2. Please, don't change the page structure, if it is not required for a task. It may affect tests.

## Development

**Note!** While developing, you can open `src/index.html` in your browser with "live server" to check your solution. We have also prepared a convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Run JavaScript code in RunJS application

`RunJS` is a JavaScript and TypeScript playground for desktop operating systems. It runs code as it's written and displays formatted results in the output panel on the right.

![RunJS application in work](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/images/runjs-intro.png)

RunJS is available on macOS, Windows, and Linux.

Here are detailed instructions how to install and use it: [RunJS documentation](https://runjs.app/docs).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

Navigate to [EPAM JavaScript Advanced](https://www.figma.com/file/MnzJnLZtw6FBVcYQD8SQbx/JavaScript-advanced?node-id=1%3A5&t=rlbgIO3PyKhr4alZ-0) project in Figma. All the assets can be downloaded from it and all font sizes, margins, paddings, and text content can be found there. You might come across some dimensions that are not rounded (31px, 149px, etc.). Feel free to replace them with the closest round numbers (30px, 150px, etc.).

In the project, while being in the events-task, create the Join Our Program section using only JavaScript DOM API. In order to do that, create a JavaScript file called pageLoad.js and include it in the <head> tag of the index.html file. The Join Our Program section should be implemented according to the materials from Figma.

Display the Join Our Program section when the page is loaded, which means that it should be dynamically created (the previous step) and added to the page. It is mandatory to use the browser event learned in the event’s topic.

Add an event listener for the "submit" event for the Join Our Program form (by clicking on the Subscribe button), prevent the default form behavior, and log the entered value to the console.
