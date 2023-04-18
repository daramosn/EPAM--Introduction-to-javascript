# ES6

## Tasks

### Is valid JSON
Create the function "isValidJSON" which validates if the string is valid JSON or not.
For example:
```js
isValidJSON('{"a": 2}'); // result: true;
isValidJSON('{"a: 2'); // result: false;
```

### Greeting
Create the function "greeting" which returns a greeting string.
For example:
```js
greeting({name: 'Bill', surname: 'Jacobson', age: 33}); // result: Hello, my name is Bill Jacobson and I am 33 years old.
greeting({name: 'Jim', surname: 'Power', age: 11}); // result: Hello, my name is Jim Power and I am 11 years old.
```

### Unique Numbers
Create the function `unique` which takes an array of numbers with duplicates and returns an array of numbers without duplicates. Use a set.
For example:
```js
unique([1, 1, 2, 3, 5, 4, 5]); // result: [1, 2, 3, 5, 4]
```

### Lego Generator
Create the function `generator` which takes an array of Lego blocks and return them one by one.
For example:
```js
const it = generator(['brick', 'plate', 'minifigure', 'slope']);
it.next().value; // return 'brick'
it.next().value; // return 'plate'
```

Write your code in `src/index.js.
*All test cases are designed as “error-free”, so don't worry about handling any errors.*

## Prepare and test
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: es6
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/es6/  
4. Go to folder `es6`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm test` or `npm run test:local` in the command line  
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)
1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the [your course page](https://autocode.lab.epam.com/student/group/80), `subscribe (if not subscribed)` and navigate to the appropriate task 
3. Select your task (es6)
4. Press the `Check task` button and enjoy, results will be available in few minutes

### Notes
1. We recommend you to use nodejs of version 18 or lower. If you using are any of the features which are not supported by v18, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
