# Objects and Arrays

## Tasks

### Number of duplicates
Transform an array of elements (a number, a string) into an array where each item is represented by a number of element appearances before the element index in the original array (including the current index).

For example:
```js
numberOfDuplicates([1, 2, 1, 1, 3]) // [1, 1, 2, 3, 1]
numberOfDuplicates(['a', 'a', 'aa', 'a', 'aa']) // [1, 2, 1, 3, 2]
```

Write your code in `src/index.js.
*All test cases are designed as “error-free”, so don't worry about handling any errors.*

### Object strength
Let's introduce Object strength specificity.
Specificity is a weight that is applied to a given object, determined by the number of each property type.
Each type costs:
```js
0 - undefined
1 - boolean
2 - number
3 - string
5 - object
7 - function
9 - bigint
10 - symbol
```

Implement a function for counting object strength.

For example:
```js
countObjectStrength(Array) // 31 (2 + 3 + 5 + 7 + 7 + 7)
countObjectStrength(Array.prototype) // 226 (2 + 7 * 32)
countObjectStrength([]) // 2
countObjectStrength({some: 'value'}) // 3
```

Write your code in `src/index.js.
*All test cases are designed as “error-free”, so don't worry about handling any errors.*


## Prepare and test
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: objects-and-arrays
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/objects-and-arrays/  
4. Go to folder `objects-and-arrays`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm test` or `npm run test:local` in the command line  
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)
1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the [your course page](https://autocode.lab.epam.com/student/group/80), `subscribe (if not subscribed)` and navigate to the appropriate task 
3. Select your task (object-and-arrays)
4. Press the `Check task` button and enjoy, results will be available in few minutes

### Notes
1. We recommend you to use nodejs of version 18 or lower. If you using are any of the features which are not supported by v18, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
