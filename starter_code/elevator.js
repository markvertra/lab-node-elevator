class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "";
    this.waitingList = [];
    this.passengers = [];
    this.elevatorRunning = false;
  }
    

    start() { 
      var that = this;
      this.elevatorRunning = true;
      var elevatorMotion = setInterval((function() {
        if (that.elevatorRunning) {
          that.update();
        } else {
          clearInterval(elevatorMotion);
        }
        
      }) , 1000);
    }
    
    stop() { 
      this.elevatorRunning = false;
    }
    update() {
      this.log();
    }
    _passengersEnter() { }
    _passengersLeave() { }
    floorUp() {
      this.direction = "Up";
      if (this.floor < this.MAXFLOOR) {
        this.floor++;
      }
    }
    floorDown() { 
      this.direction = "Down";
      if (this.floor > 0) {
        this.floor--;
      }
    }

    _waitingListChecker(floor) {
      return this.waitingList.filter(function(item) {
        return item["originFloor"] == floor;
      });
    }
    
    // __waitingListEmptier(item) {
    //   if (this.waitingList.indexOf(item) != -1) {


    //   }
    // }
    
    call(person) { 
      this.waitingList.push(person);
      this.requests.push(person.originFloor);
    }
    log() {
      console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
    }
}

// module.exports = Elevator;
