# Classes

## Tasks

### Roles
Implement the functionality to create roles. Each role is defining by its type (`Guest`, `User`, `Admin`)

| Type  | constructor | getTask | createTask | changeType |
| --- | --- | --- | --- | --- |
| Guest | a method which gets an array of tasks | a method which gets tasks id (the array index) and returns a task from the array of tasks | should not be defined | should not be defined | 
| User | a method which gets an array of tasks | a method which gets tasks id (the array index) and returns task from the array of tasks | a method which adds a new task to the array of tasks | should not be defined | 

| Type  | constructor | getArray | changeType |
| --- | --- | --- | --- |
| Admin | a method which gets an array of guests and users | a method which returns an array of guests and users | a method which gets a number (the array index) modifies the array item at the provided index (changes the object type from a guest to a user and otherwise and as a result, the tasks should migrated from one type to another), and returns a modified array of items | 

For example:
```js
const guest = new Guest(
  [
    new Task('task name 1'),
    new Task('task name 2'),
    new Task('task name 3'),
  ]
);

guest.getTask(0) // { name: 'task name 1' }
guest.getTask(2) // { name: 'task name 3' }
guest.createTask(new Task('task name 4')) // taskName is not defined, should not work

const user = new User(
  [
    new Task('task name 1'),
    new Task('task name 2'),
    new Task('task name 3'),
  ]
);

user.getTask(0) // { name: 'task name 1' }
user.getTask(2) // { name: 'task name 3' }
user.createTask(new Task('task name 4'))
user.getTask(3) // {name: 'task name 4'}

const admin = new Admin(
  [
    new Guest([]),
    new Guest([new Task('task name 1')]),
    new User([]),
    new User([new Task('task name 2')]),
  ]
);

admin.getArray(); // [Guest, Guest, User, User]
admin.changeType(1);
admin.getArray(); // [Guest, User, User, User]

```

Write your code in `src/index.js.
*All test cases are designed as “error-free”, so don't worry about handling any errors.*

## Prepare and test
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: classes
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/classes/  
4. Go to folder `classes`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm test` or `npm run test:local` in the command line  
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)
1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the [your course page](https://autocode.lab.epam.com/student/group/80), `subscribe (if not subscribed)` and navigate to the appropriate task 
3. Select your task (classes)
4. Press the `Check task` button and enjoy, results will be available in few minutes

### Notes
1. We recommend you to use nodejs of version 18 or lower. If you using are any of the features which are not supported by v18, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
