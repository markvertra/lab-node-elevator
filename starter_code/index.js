const Elevator = require('./elevator.js');
const Person = require("./person.js");

elevator = new Elevator();
mark = new Person("Mark", 2, 8);
john = new Person("John", 4, 9);
will = new Person("Will", 1, 6);
setTimeout(function() {
    elevator.call(will);
}, 2000);
elevator.start();
elevator.call(mark);
elevator.call(john);

