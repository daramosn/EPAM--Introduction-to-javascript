class Task {
    constructor(name) {
        this.name = name;
    }
}

class Guest {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTask(index) {
        return this.tasks[index];
    }

    createTask(task) {
        throw new Error("method 'createTask' is not defined");
    }

    changeType(index) {
        throw new Error('method \'changeType\' is not defined');
    }
}

class User extends Guest {
    constructor(tasks) {
        super(tasks);
    }

    createTask(task) {
        this.tasks.push(task);
    }

    changeType(index) {
        throw new Error('method \'changeType\' is not defined');
    }
}

class Admin {
    constructor(array) {
        this.array = array;
    }

    getArray() {
        return this.array;
    }

    changeType(index) {
        if (this.array[index] instanceof Guest) {
            this.array[index] = new User(this.array[index].tasks)
        } else {
            this.array[index] = new Guest(this.array[index].tasks);
        }
    }
}

module.exports.Task = Task;
module.exports.Guest = Guest;
module.exports.User = User;
module.exports.Admin = Admin;
