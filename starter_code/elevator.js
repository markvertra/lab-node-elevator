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
      if (this.passengers.length != 0) {
          if (this.passengers[0].destinationFloor > this.floor) {
            this.floorUp();
          } else if (this.passengers[0].destinationFloor < this.floor) {
            this.floorDown();
          } 
      } else { 
        if (this.requests[0] > this.floor) {
          this.floorUp();
        } else if (this.requests[0] < this.floor) {
          this.floorDown();
        }
      }
      this.log();
      if (this.requests.indexOf(this.floor) != -1) {
        this.requests.splice(this.requests.indexOf(this.floor), 1);
      }
    }

    _passengersEnter() {
      var newPassengers = this.waitingList.filter(item => (item.originFloor == this.floor));
      var liftPassengers = this.passengers.concat(newPassengers);
      this.passengers = liftPassengers;
      newPassengers.map(item => console.log(`${item.name} has joined the elevator.`));
      this.waitingList = this.waitingList.filter(item => (item["originFloor"] != this.floor));
     }

    _passengersLeave() { 
      this.passengers.filter(item => item["destinationFloor"] == this.floor).map(item => console.log (`${item.name} has left the elevator`));
      this.passengers = this.passengers.filter(item => item["destinationFloor"] != this.floor);
      
    }

    floorUp() {
      this.direction = "Up";
      if (this.floor < this.MAXFLOOR) {
        this.floor++;
      }
      this._passengersEnter();
      this._passengersLeave();
    }

    floorDown() { 
      this.direction = "Down";
      if (this.floor > 0) {
        this.floor--;
      }
      this._passengersEnter();
      this._passengersLeave();
    }
    
    call(person) { 
      this.waitingList.push(person);
      if (this.requests.indexOf(person.originFloor) == -1) {
        this.requests.push(person.originFloor);
      }
    }

    log() {
      console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
    }
}

module.exports = Elevator;
