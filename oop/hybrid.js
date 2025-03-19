class Animal {
  eat() {
    console.log("this is eating");
  }
}

const CanSwim = {
  swim() {
    console.log("I can swim.");
  },
};

const CanFly = {
  fly() {
    console.log("I can fly.");
  },
};

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Dog.prototype, CanSwim, CanFly);

const duck = new Dog("***");
duck.eat();
duck.swim();
duck.fly();
