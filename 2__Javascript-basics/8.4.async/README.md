# Async

## Tasks

### Strategies
Create three functions:
1. The first function `callback1` takes one parameter: data as an array. This function calculates the sum of the elements in the array.
2. The second function `callback2` takes one parameter: data as an array. This function multiplies the elements of the array. 
3. The third function `w` takes two parameters: s as a string and callback as one of the previous two functions. This function transforms the string into an array in which each element is represented by the length of a word in the string, and the function call the callback function from its second parameter as shown below:

For example
```js
w('a bb ccc dddd', callback1); // result: 10
w('a bb ccc dddd', callback2); // result: 24
```


### Mocker
Create the function `mocker` which will return defined data with 1 second delay.
It might be helpful in Front-end development when there is a need to make sure that your interface works well with data that you get asynchronously. The use of the function is shown below:

For example:
```js
const getUsers = mocker([{id: 1, name: 'User1'}]);
getUsers().then((users) => { // Will fire after 1 second.
  console.log(users); // result: [{id: 1, name: 'User1'}];
});
```

### Summarize1
Create the function `summarize1` that receives promises and returns promise with sum of their values as shown below:

For example:
```js
const promise1 = Promise.resolve(4);
const promise2 = new Promise((resolve) => resolve(2));
summarize1(promise1, promise2).then((sum) => {console.log(sum);}); // result: 6
```

### Summarize2
Create the async function `summarize2` that receives promises and returns promise with sum of their values as shown below:

For example:
```js
const promise1 = Promise.resolve(4);
const promise2 = new Promise((resolve) => resolve(2));
summarize2(promise1, promise2).then((sum) => {console.log(sum);}); // result: 6
```

Write your code in `src/index.js.
*All test cases are designed as “error-free”, so don't worry about handling any errors.*

## Prepare and test
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: async
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/async/  
4. Go to folder `async`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm test` or `npm run test:local` in the command line  
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)
1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the [your course page](https://autocode.lab.epam.com/student/group/80), `subscribe (if not subscribed)` and navigate to the appropriate task 
3. Select your task (async)
4. Press the `Check task` button and enjoy, results will be available in few minutes

### Notes
1. We recommend you to use nodejs of version 18 or lower. If you using are any of the features which are not supported by v18, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
