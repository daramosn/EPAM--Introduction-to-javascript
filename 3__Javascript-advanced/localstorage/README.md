# JavaScript localStorage

## Before we start

1. This practical task is verified automatically with tests.
2. Please, put all your `JavaScript` code in the `src/script.js` and `HTML` code in the `src/index.html` files. Functions from `src/script.js` are used in the `<script>` inside `src/index.html`. If you use any other file, we would not be able to verify it.
3. Please, don't change the page structure, if it is not required for a task. It may affect tests.

## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Run JavaScript code in RunJS application

`RunJS` is a JavaScript and TypeScript playground for desktop operating systems. It runs code as it's written and displays formatted results in the output panel on the right.

![RunJS application in work](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/images/runjs-intro.png)

RunJS is available on macOS, Windows, and Linux operating systems.

Here are detailed instructions how to install and use it: [RunJS documentation](https://runjs.app/docs).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

1. Create module `VALID_EMAIL_ENDINGS`. This module should contains

const VALID_EMAIL_ENDINGS = [`gmail.com`, `outlook.com`, `mail.com`, `icloud.com`]

2. Create the email validator (email-validator.js file in the src folder) module and import it in main.js

The function `validate(email)` should return `true` if an email contains a valid ending, or `false` otherwise. Also email should contains at least three letters before `@` Validate an email address from the email input field while submitting the form.

3. Create the localStorage-data (localStorage-data.js file in the src folder) module. Implement the functionality to save the value of subscription email input when it changes (use "input" event) to `localStorage` in the "Join Our Program" section. Create the function `setLocalStorage`. The function should set local storage email with a key and return true. `email` should be a string.
If email is not a string or is an empty string then the function should not set data to local storage and the function should return false.

Implement the functionality to populate the subscription email input with the value from `localStorage` on page load. Create the function `getLocalStorage`. The function should return email if key="subscriptionEmail" or empty string, if `key` not found.
