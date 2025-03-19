
const CarRun = {
    run() {
        console.log("this car is run.");
    }
};


const CarJump = {
    jump() {
        console.log("this car is jump.");
    }
};


class Toyota {
    constructor(name) {
        this.name = name;
    }
}


Object.assign(Toyota.prototype, CarRun, CarJump);


const car = new Toyota("Fortuner");
car.run();  
car.jump(); 
