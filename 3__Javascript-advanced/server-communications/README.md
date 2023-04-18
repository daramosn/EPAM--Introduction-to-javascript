# Server communications

## Write functions for communication with server

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

Write functions for server communications. Requirements are below.

Please, note you should edit the `src/script.js` file. We can't verify your solution if you use a different file.

For a function creation, it is mandatory to use `Function Declaration` or we will not be able to verify them. How to use `Function Declaration`: [javascript.info: Function Declaration](https://javascript.info/function-basics#function-declaration).

**Please, note:**

- If task requirement says: _Function should **return** <something>_, it means it should deliberately return expected value. If instead of returning a value, you will show it in the console, it will not pass the check. More about function returning a value: [Returning a value](https://javascript.info/function-basics#returning-a-value).

### Requirements for the functions

1. **Function 'getRandomUsers'**

Write a function `getRandomUsers` that make a fetch with `URL:` `https://randomuser.me/api/` and returns a promise resolving to an array of users from the response.

```js
async function getRandomUsers(quantity, nationalities) {
  // your code...
}
```

1. The inputs for the function are quantity and nationalities. (`quantity` - `string` or `number`, `nationalities` - `string`).
2. The return value of the function should be a promise resolving to an array of users.
3. The response should depend on query parameters. Use key `results` to filter the quantity of users in response.
   - Use key `nat` to filter nations.
   - Use key `results` to limit amount of the results.
   - Use string `&inc=name,email,nat&noinfo` at the end of the query to remove extra information from the response. This parameters are contant.
4. In case of input parameters are not provided should return 1 user with random nationality inside of an array. Please, pass to the server `results=1` and `nat=` for this case.
5. An array of users are in the `results` property of a response.

**Example of function usage:**

```js
const randomUsers = await getRandomUsers(2, "US");
// fetch URL is: https://randomuser.me/api/?results=2&nat=US&inc=name,email,nat&noinfo
console.log("randomUsers: ", randomUsers);
// [
// 	{
// 		"name": {
// 			"title": "Mr",
// 			"first": "Glen",
// 			"last": "Gardner"
// 		},
// 		"email": "glen.gardner@example.com",
// 		"nat": "US"
// 	},
// 	{
// 		"name": {
// 			"title": "Mrs",
// 			"first": "Clara",
// 			"last": "Cook"
// 		},
// 		"email": "clara.cook@example.com",
// 		"nat": "US"
// 	}
// ]

const randomUsers = await getRandomUsers(3, "UA,FR");
// fetch URL is: https://randomuser.me/api/?results=3&nat=UA,FR&inc=name,email,nat&noinfo
console.log("randomUsers: ", randomUsers);
// [
// 	{
// 		"name": {
// 			"title": "Mr",
// 			"first": "Mirolyub",
// 			"last": "Dolzhenko"
// 		},
// 		"email": "mirolyub.dolzhenko@example.com",
// 		"nat": "UA"
// 	},
// 	{
// 		"name": {
// 			"title": "Miss",
// 			"first": "Julia",
// 			"last": "Vidal"
// 		},
// 		"email": "julia.vidal@example.com",
// 		"nat": "FR"
// 	}
// ]

const randomUsers = await getRandomUsers();
// fetch URL is: https://randomuser.me/api/?results=1&nat=&inc=name,email,nat&noinfo
console.log("randomUsers: ", randomUsers);
// [
// 	{
// 		"name": {
// 			"title": "Mr",
// 			"first": "Gonzalo",
// 			"last": "Arevalo"
// 		},
// 		"email": "gonzalo.arevalo@example.com",
// 		"nat": "MX"
// 	}
// ]
```

2. **Function 'createPost'**

Write a function `createPost` that make a fetch with `method: 'POST'` and url: `https://jsonplaceholder.typicode.com/posts` and returns an object with created post.

```js
async function createPost(data) {
  // your code...
}
```

1. The `data` parameter is an object with fileds: `title`, `body` as a strings and `userId` as number.

```js
// An object example
{
	title: 'Post',
	body: 'description',
	userId: 1,
}
```

2. The object from `data` parameter should be passed as a body of the request in the form of `JSON` string.
3. Please, add to your request a content type header required for passing data in a `JSON` format and `UTF-8` encoding.
4. The function should return a promise resolving with object with created post from server.

**Example of function usage:**

```js
const postData = {
  title: "Post",
  body: "description",
  userId: 1,
};
let post = await createPost(postData);
console.log("post data: ", post);
// {
//  "title": "Post",
// 	"body": "description",
// 	"userId": 1,
// 	"id": 101
// }
```
