class Vehicle {
    startEngine() {
        console.log("Engine started.");
    }
}

class Bike extends Vehicle {
    gare() {
        console.log("Bike running is fourth gare.");
    }
}

class Truck extends Vehicle {
    run() {
        console.log("Truck is running .");
    }
}

const myBike = new Bike();
myBike.startEngine(); 
myBike.gare();    

const myTruck = new Truck();
myTruck.startEngine(); 
myTruck.run();   
