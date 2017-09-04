class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }
}

mark = new Person("Mark", 2, 8);

module.exports = Person;
