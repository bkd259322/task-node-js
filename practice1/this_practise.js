// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person)

// const name = {
//     name:"bhargav",
//     getName: function () {
//         console.log(this.name)
//     }
// }
// name.getName()

// class person {
//     constructor(name) {
//         this.name = name;
//     }
// }
// const person1 = new person("bhargav")
// console.log(person1)

// const obj = {
//     a:1,
//     showName: function (){
//         const y = () =>{
//             console.log(this.a)
//         }
//         y()
//     }
// }
// obj.showName();

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   console.log(fruits)

// const array = [1,2,3,4,5,6]
// const squre = array.map(num => num * num)
// console.log(squre)

// const array1 = [1,2,3,4,5,6]
// const result = array1.filter(num => num % 2 == 0)
// console.log(result)

// const array2 = [1,2,3,4,5,6]
// const out = array2.reduce((acc,curr)=>acc+curr,0)
// console.log(out)

// let name = {
//     firstName:"bhargav",
//     lastName:"dangar",
//     printFullName: function (homeTown) {
//         console.log(this.firstName + " " + this.lastName + " from " + homeTown)
//     }
// }
// name.printFullName.call(name,"junagadh");

// let name2 = {
//     firstName:"sagar",
//     lastName:"chavda",
// }
// name.printFullName.call(name2," khorasa ")

// let name = {
//     firstName:"bhargav",
//     lastName:"dangar",
//     printFullName: function(Hometown,state){
//         console.log(this.firstName + " " + this.lastName + " form " +  Hometown + " , " + state)
//     }
// }
// // name.printFullName.call(name,"junagadh","karnataka")

// let name2 = {
//     firstName:"punit",
//     lastName:"dangar",
// }
// name.printFullName.apply(name2,["gandhinagar","gujrat"] )

// let printName = name.printFullName.bind(name2,["gandhinagar","gujrat"] )
// console.log(printName)
// printName();

// console.log(this)

// const obj = {
//     name: "JavaScript",
//     greet: function () {
//       console.log(this.name); // "JavaScript"
//     },
//   };
//   obj.greet();

// function Person(name) {
//     this.name = name;
//   }
//   const person1 = new Person("Alice");
//   console.log(person1.name); // "Alice"

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//     greet() {
//       console.log(`Hello, ${this.name}`);
//     }
//   }
//   const p = new Person("Bob");
//   p.greet(); // "Hello, Bob"

// const obj = {
//     name:"bhargav",
//     printName: function () {
//         const arro = () =>{
//             console.log(this.name)
//         }
//         arro();
//     }
// }
// obj.printName()

// function greet(message,age){
//     console.log(this.name + " says: " + message + " age is: " + age)
// }
// const person = {name:"bhargav"}
// greet.call(person,"hello!",[ 21])

// function show() {
//     console.log(this);  // In browsers, it will log the window object
//   }

//   show();

// "use strict";

// function show() {
//   console.log(this);  // In strict mode, this will be undefined
// }

// show();

// const array = [1,2,3,4,5,6]
// const result = array.reduce((acc,curr) => acc + curr,0)
// console.log(result)
// console.log(array)

// let array = [1,5,87,9,14,11,66,5445,88,222,2,3,5,54,8,6]
// let result = array.reverse()
// console.log(result)

// let length = 10;

// function fn() {
//   console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();              // Call `fn()` normally
//     arguments[0]();    // CaXll `fn()` using `arguments[0]`
//   }
// };

// obj.method(fn, 7, 8);

// let obj1 = {
//     name:"bhargav",
//     surr:"Dangar"
// }

// let obj2 = obj1;

// obj2.surr = "ahir"

// console.log(obj1)
// console.log(obj2)

// let arr1 = [1,2,3]
// let arr2 = arr1

// arr2.push(4)
// console.log(arr1) / Lconsole.log(arr2)

// function test() {
//     // Direct eval
//     console.log(eval("this") === this);
//     // Indirect eval, non-strict
//     console.log(eval?.("this") === globalThis);
//     // Indirect eval, strict
//     console.log(eval?.("'use strict'; this") === globalThis);
//   }

//   test.call({ name: "obj" }); // Logs 3 "true"

// An object can be passed as the first argument to 'call'
// // or 'apply' and 'this' will be bound to it.
// const obj = { a: "Custom" };

// // Variables declared with var become properties of 'globalThis'.
// var a = "Global";

// function whatsThis() {
//   return this.a; // 'this' depends on how the function is called
// }

// whatsThis(); // 'Global'; the 'this' parameter defaults to 'globalThis' in non–strict mode
// obj.whatsThis = whatsThis;
// obj.whatsThis(); // 'Custom'; the 'this' parameter is bound to obj

// const obj = {
//     getThisGetter() {
//       const getter = () => this;
//       return getter;
//     },
//   };

// const fn2 = obj.getThisGetter;
// console.log(fn2()() === globalThis); // true in non-strict mode

// class Car {
//     constructor() {
//       // Bind sayBye but not sayHi to show the difference
//       this.sayBye = this.sayBye.bind(this);
//     }

//     sayHi() {
//       console.log(`Hello from ${this.name}`);
//     }

//     sayBye() {
//       console.log(`Bye from ${this.name}`);
//     }

//     get name() {
//       return "Ferrari";
//     }
//   }

//   class Bird {
//     get name() {
//       return "Tweety";
//     }
//   }

//   const car = new Car();
//   const bird = new Bird();

//   // The value of 'this' in methods depends on their caller
//   car.sayHi(); // Hello from Ferrari
//   bird.sayHi = car.sayHi;
//   bird.sayHi(); // Hello from Tweety

//   // For bound methods, 'this' doesn't depend on the caller
//   bird.sayBye = car.sayBye;
//   bird.sayBye(); // Bye from Ferrari

// bob --> Person.prototype --> Object.prototype --> null

// console.log(global);

// let x = {
//     a : 1,
//     b : {
//         c : 1
//     }
// }
// y = {...x}
// // y.b = {...x.b}
// x.a = 100
// x.b.c = 100
// console.log(x)
// console.log(y)

// "use strict";

// let obj = {};
// Object.defineProperty(obj, "x", {
// 	value: 42,
// 	writable: true,
// 	enumerable: true,
// 	configurable: false,
// });

// console.log(obj.x); // 42
// console.log(obj.x); // 42
// // Attempting to redefine throws an error in strict mode
// try {
// 	Object.defineProperty(obj, "x", {
// 		value: 100,
// 	});
// } catch (error) {
// 	console.error("afshf"); // "Cannot redefine property: x"
// 	console.error(error.message); // "Cannot redefine property: x"
// }

// console.log("x : "+obj.x); // 42

// const bhargav = ({company}) =>{

// }
// bhargav(company = "dangar")

// for (const key of Object.getOwnPropertyNames(Math)) {
//     if (typeof Math[key] === 'function') {
//       console.log(key);
//     }
//   }

// (function() {
//     "use strict";
//     globalThis.name = "Global";

//     const obj = {
//       name: "Object",
//       getName: function(){
//         console.log(this.name);
//       }
//     };

//     obj.getName();
//   })();

// // Declaration
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }

//   // Expression; the class is anonymous but assigned to a variable
//   const Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };

//   // Expression; the class has its own name
//   const Rectangle = class Rectangle2 {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };

// class Example {
//     field = 'default'; // public class field
//     constructor(name) {
//       this.name = name;
//     // constructor property
//     }
//   }

// "use strict"
// function myFunction() {
//   console.log(this);
// }
// myFunction();

// const obj = {
//   value: 10,
//   arrowFn: () => {
//     console.log(this.value);
//   }
// };
// obj.arrowFn();

// const obj = {
//   value: 42,
//   print() {
//     console.log(this.value);
//   }
// };
// obj.print();

// const obj = {
//   value: 50,
//   print() {
//     const self = this;
//     function inner() {
//       console.log(self.value);
//     }
//     inner();
//   }
// };
// obj.print();

// function Person(name) {
//   this.name = name;
// }
// const p = new Person("John");
// console.log(p.name);

// "use strict"
// const obj = {
//   name: "Alice",
//   greet() {
//     console.log(this.name);
//   }
// };
// const greetFn = obj.greet;
// greetFn();

// const obj = {
//   value: 100,
//   print: function () {
//     console.log(this.value);
//   }
// };
// const boundFn = obj.print.bind(obj);
// boundFn();

// class Example {
//   static show() {
//     console.log(this);
//   }
// }
// Example.show();

// function show() {
//   console.log(this);
// }
// show.call({ name: "Custom Object" });

// function show(a, b) {
//   console.log(this, a, b);
// }
// show.apply({ name: "Custom" }, [1, 2]);

// function Test() {
//   this.name = "Test";
//   return { name: "Override" };
// }
// const obj = new Test();
// console.log(obj.name);

// const Arrow = () => {};
// const obj = new Arrow();

// class Example {
//   #privateVar = 42;
//   getPrivate() {
//     return this.#privateVar;
//   }
// }
// const ex = new Example();
// console.log(ex.getPrivate());

// class Example {
//   constructor() {
//     console.log("Constructor");
//   }
// }
// Example();

// const obj = {
//   name: "Alice",
//   sayName() {
//     const inner = function () {
//       console.log(this.name);
//     };
//     inner();
//   }
// };
// obj.sayName();

// class Example {
//   constructor() {
//     this.name = "Example";
//   }
//   static getName() {
//     return this.name;
//   }
// }
// console.log(Example.getName());

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(this.name);
//   }
// }
// const p = new Person("John");
// const greetFn = p.greet;
// greetFn.call(p);

// "use-strict"
// class A {
//   constructor() {
//     this.x = 10;
//   }
//   getX() {
//     console.log(this.x);
//   }
// }
// const obj = new A();
// const fn = obj.getX;
// fn();

// class Button {
//   constructor() {
//     this.text = "Click me";
//   }
//   handleClick() {
//     console.log(this.text);
//   }
// }
// const b = new Button();
// document.body.addEventListener("click", b.handleClick);

// const obj = Object.freeze({ name: "Alice" });
// obj.name = "Bob";
// console.log(obj.name);

// class A {
//   constructor() {
//     this.name = "Parent";
//   }
// }
// class B extends A {
//   constructor() {
//     super();
//     console.log(this.name);
//   }
// }
// new B();

// const obj = {
//   name: "Alice",
//   say() {
//     console.log(this.name);
//   }
// };
// setTimeout(obj.say, 1000);

// const obj = {
//   name: "Alice",
//   say() {
//     console.log(this);
//   }
// };
// (obj.say || function() {})();

// class A {
//   constructor() {
//     return Object.create(null);
//   }
// }
// const obj = new A();
// console.log(obj instanceof A);

// const handler = {
//   get(target, prop) {
//     console.log(this);
//   }
// };
// const proxy = new Proxy({}, handler);
// proxy.test;

//  sayName() {
//   setTimeout(() => {
//     console.log(this.name);
//   }, 1000);
//  }

// function Person() {}
// Person.prototype.name = 'Alice';
// const p1 = new Person();
// Person.prototype.name = 'Bob'
// Person.prototype = {name : 'Bob'}
// const p2 = new Person();
// console.log(p1.name, p2.name);

// class MyClass {
//   constructor(name) {
//     this.name = name;
//     this.show = () => {
//       console.log(this.name);
//     };
//   }
// }
// const obj = new MyClass("Frank");
// console.log(obj);

// const extractedShow = obj.show;
// extractedShow();

// const obj = {
//   value: 1100,
//   show: function() {
//     console.log(this.value);
//   }
// };
// function run(fn) {
//   fn();
// }
// run(obj.show);

// class Greeter {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `Hello, ${this.name}`;
//   }
// }
// // const greet = new Greeter("Bob").greet;
// const hyu = new Greeter("Bob")
// const greet = hyu.greet
// console.log(greet.call(hyu));

// const Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// let temp = new Rectangle(10,10)
// console.log(temp) // guess temp is object of which class ?

// const person = {
//   name: "anuj",
//   age: 9,
// };
// Object.defineProperty(person,'name',{enumerable:false});
// for(let p in Object.getOwnPropertyNames(person))console.log(p)

// function Person(name){
//     this.name = name;
//     return {}
// }
// const anuj = new Person('anuj');
// console.log(anuj.name)

// const o1 = {
//     a:10,
//     b:15,
//     c:18
// };
// const o2 = Object.assign({c:7,d:1},o1)
// console.log(o2)

// class A{
//     constructor() {
//     this.print = function () {
//     console.log('print1');
//     };
//     }
//     print() {
//     console.log('print2');
//     }
//     }
//     A.prototype.print = function () {
//     console.log('print3');
//     };
//     const a = new A();
//     a.print();

// class A {
//   print() {
//     console.log("print1");
//   }
// }
// class B extends A {
//   print() {
//     console.log("print2");
//   }
// }
// class C extends B {
//   print() {
//     console.log("print3");
//   }
// }
// class D extends C {
//   print() {
//     B.prototype.print();
//   }
// }
// const d = new D();
// d.print();


// function A (x) { 
//     this.x = x; 
//     } 
//     function B(x, y) { 
//     B.call(this, y); 
//     this.y = y; 
//     } 
//     Object.setPrototypeof(B.prototype, A.prototype); 
//     const b = new 8('abc', 'def'); 
//     console.log(b);


// const user = #{"name": "Alice"}; // Immutable object
// const colors = #["red", "blue"]; // Immutable array
// console.log(user,colors)


// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year)



// const obj1 = {name:"bhargav",age:20}
// const obj2 = {...obj1,age:21}
// console.log(obj2)


// const arr = [1,3,5,7,9]
// for(let i=0; i<arr; i++){
//     console.log(i)
// }

