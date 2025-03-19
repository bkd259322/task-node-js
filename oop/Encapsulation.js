class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getDetails() {
    return `${this.#name} is ${this.#age} years old.`;
  }

  setAge(age) {
    if (age > 0) {
      this.#age = age;
    } else {
      console.log("Age must be a positive number.");
    }
  }
}

const person = new Person("bhargav", 20);
console.log(person.getDetails());
person.setAge(30);
console.log(person.getDetails());
