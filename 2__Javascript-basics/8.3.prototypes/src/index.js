/**
 *
 * @returns {Null}
 */
module.exports.Logger = function logger() {
    this.eventList = [];

    this.log = item => {
        this.eventList.push(item);
    };
    this.getLog = () => {
        return this.eventList;
    };
    this.clearLog = () => {
        this.eventList = [];
    };
};

/**
 *
 * @returns {Array}
 */
// Change this function and implement task
Array.prototype.shuffle = function () {
    const newArray = [];
    const oldArray = this.slice();
    while (oldArray.length != 0) {
        let index = Math.floor(Math.random() * oldArray.length);
        newArray.push(...oldArray.splice(index, 1));
    }
    return newArray;
}


