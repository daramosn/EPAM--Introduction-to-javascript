# Prototypes

## Tasks

### Logger
Implement functionality for a logger object. It should have 3 methods, log, getLog and clearLog it should be used as shown below:

For example:
```js
const logger = new Logger();
logger.log('Event 1');
logger.log('Event 2');
logger.getLog(); // ['Event 1', 'Event 2']
logger.clearLog();
logger.getLog(); // []
```

### Shuffle
Implement a new method of the array "shuffle" to shuffle arrays.  The method should return a new array by exchanging the positions of elements in the array. It should be used as shown below: 

For example:
```js
[1,2,3,4].shuffle(); // result: some random shuffling ex: [2,3,4,1]
['a', 'b', 'c'].shuffle(); // result: some random shuffling ex: ['c', 'b', 'a']
```

Write your code in `src/index.js.
*All test cases are designed as “error-free”, so don't worry about handling any errors.*

## Prepare and test
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: prototypes
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/prototypes/  
4. Go to folder `prototypes`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm test`  or `npm run test:local` in the command line  
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)
1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the [your course page](https://autocode.lab.epam.com/student/group/80), `subscribe (if not subscribed)` and navigate to the appropriate task 
3. Select your task (prototypes)
4. Press the `Check task` button and enjoy, results will be available in few minutes

### Notes
1. We recommend you to use nodejs of version 18 or lower. If you using are any of the features which are not supported by v18, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
