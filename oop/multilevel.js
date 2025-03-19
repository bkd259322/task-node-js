class Car {
  car() {
    console.log("This car is a sport car");
  }
}

class Engine extends Car {
  start() {
    console.log("engine is a started");
  }
}

class Break extends Engine{
    stop(){
        console.log("car is stop");
    }
}

const myCar = new Break();
myCar.car();
myCar.start();
myCar.stop();
