// function foo() {
//     console.log(x);
// }

const { Long } = require("mongodb");

//   function bar() {
//     let x = 10;
//     foo();
//   }
//   bar();

// let a= 5
// {
//     let a = 8
//     console.log(a)
// }

// var a= 10

// {
//     var a = 5
//     console.log(a)
// }

// console.log(a)

// name1()
// console.log(a)

// for (var index = 0; index < 5; index++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 1000*i);
//     })(index)
// }

// let a = {
//     value : 1,
//     toString () {
//         return a.value++
//     }
// };

// if(a ==1 && a==2 && a==3){
//     console.log(true)
// }

// var x = 10;
// {
//     var x = 20;
// }
// console.log(x);

// {
//     let x = 5;
// }
// console.log(x);

// function outer() {
//     let x = 10;
//     function inner() {
//         console.log(x, y);
//     }
//     inner();
// }
// outer();

// function outer() {
//     let message = "outer";
//     function inner() {
//         console.log(message);
//     }
//     inner();
// }
// outer();

// function outer() {
//     var a = 10;
//     return function inner() {
//         console.log(a);
//     };
// }
// const func = outer();
// func();

// let z = 100;
// {
//     let z = 200;
//     console.log(z);
// }
// console.log(z);

// function outer() {
//     let x = 10;
//     return function inner() {
//         console.log(x);
//     };
// }
// const func = outer();
// func();

// function outer() {
//     let outerVar = "outer";
//     function inner() {
//         let innerVar = "inner";
//         console.log(innerVar);
//     }
//     inner();
//     console.log(innerVar);
// }
// outer();

// JSON.parse("{name: 'John'}");

// console.log(x);

// let a = 5;
// let a = 10;

// const obj = {};
// Object.freeze(obj);
// obj.newProp = 42;

// let notAFunction = 10;
// notAFunction();

// console.log(`Value: ${value}`);
// var value = 42;

// function recursive() {
//     recursive();
// }
// recursive();

// eval("let x = ;");

// let num = 5;
// num.toFixed(100);

// console.log([]  || {});
// console.log({} || []);
// console.log({} || {});
// console.log([] || []);

// console.log(typeof({})+typeof([]))

// console.log(typeof null);

// console.log(0.1 + 0.2 === 0.3);

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);

// function foo() {
//     return {
//         test: 1
//     };
// }
// let a = foo();
// console.log(a.test); // Output: 1

// function foo() {
//     return
//     {
//         test: 1
//     };
// }
// console.log(foo());

// let x = 5;
// {
//     let x = 10;
//     console.log(x);
// }

// let a = 5;
// let b = "5";
// console.log(a == b);
// console.log(a === b);

// const arr = [1, 2, 3];
// arr = [4, 5, 6];

// console.log(typeof NaN);

// console.log('hello' || 'world');
// console.log(false || 'world');
// console.log('hello' && 'world');

// function sayHi() {
//     console.log(name);
//     var name = "John";
// }
// sayHi();

// let obj = { a: 1, b: 2 };
// console.log(Object.keys(obj).length === 2);
// delete obj.a;
// console.log(Object.keys(obj).length);

// console.log(a);
// var a = 10;

// let a = 10;
// (function () {
//     console.log(a);
//     let a = 20;
// })();

// console.log([1, 2, 3] + [4, 5, 6]);

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// const obj = { a: 1 };
// Object.freeze(obj);
// obj.a = 10;
// console.log(obj.a);

// let x;
// console.log(x++);

// const a = () => () => () => "Hello";
// console.log(a()()());

// console.log([] == 0);
// console.log([] == false);
// console.log([0] == false);

// console.log(a);
// let a = 5;

// console.log(b);
// var b = 10;

// var a = 25;
// {
//     let a = 14;
//     console.log(a)
// }
// console.log(a)

// function foo() {
//     return
//     {
//         test: 1
//     };
// }
// let a = foo();
// console.log(a.test);

// console.log(typeof foo);
// var foo = function() { return 1; };

// const obj = {
//     prop: 5,
//     method: function() {
//         console.log(this.prop);
//     }
// };
// const newMethod = obj.method;
// newMethod();

// console.log(x);
// var x = 10;

// function test(x, y = 5) {
//     console.log(x, y);
// }
// test(10);

// const obj = {
//     value: 1,
//     method: () => {
//         console.log(this.value);
//     }
// };
// obj.method();

// const obj = {
//     value: 2,
//     method: function() {
//         setTimeout(function() {
//             console.log(this.value);
//         }, 1000);
//     }
// };
// obj.method();

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function() {
//     console.log(`Hello, ${this.name}`);
// };

// const john = new Person('John');
// john.sayHello();

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// console.log(a);
// let a = 10;

// console.log(typeof NaN);

// console.log('5' == 5);

// function add() {
//     console.log(arguments);
// }
// add(1, 2, 3);

// console.log(null == undefined);  // true or false?
// console.log(null === undefined);  // true or false?

// var foo = function() {
//     return
//     {
//         test: 1
//     };
// }
// console.log(foo());

// console.log(NaN === NaN);   // true or false?
// console.log(typeof NaN);    // "number" or something else?

// const obj = {
//     name: 'John',
//     greet: () => {
//         console.log(this.name);
//     }
// };
// obj.greet();

// function foo() {
//     console.log(a);
//     var a = 10;
// }
// foo();

// const obj = { a: 1 };
// const { a, b = 2 } = obj;
// console.log(b);

// function testScope() {
//     if (true) {
//         var x = 10;
//         let y = 20;
//     }
//     console.log(x);
//     console.log(y);
// }
// testScope();

// const obj = {
//     name: 'Alice',
//     greet: function() {
//         console.log(this.name);
//     }
// };
// const greet = obj.greet;
// greet();

// const obj = {
//     name: 'Alice',
//     greet: function() {
//         console.log(this.name);
//     }
// };
// const greetFn = obj.greet.bind({ name: 'Bob' });
// greetFn();

// async function foo() {
//     console.log(1);
//     await new Promise(resolve => resolve());
//     console.log(2);
// }
// foo();

// console.log(0 == false);
// console.log(0 === false);

// let counter = 0;
// const intervalId = setInterval(function() {
//     console.log(counter++);
//     if (counter > 5) clearInterval(intervalId);
// }, 1000);

// function sum() {
//     console.log(arguments);
// }
// sum(1, 2, 3);

// console.log(foo());
// var foo = function() { return "Hello"; };

// let a = 5;
// if (true) {
//     let a = 10;
//     console.log(a)
// }
// console.log(a);

// const arr = [1, 2, 3];
// arr[10] = 10;
// console.log(arr.length);

// let count = 0;
// setInterval(function() {
//     console.log(count++);
//     if (count === 5) {
//         clearInterval(this);
//     }
// }, 1000);

// console.log(3 + 4 + '5');

// let a = 2;
// a = 3;
// const b = a;
// console.log(b);

// const foo = { bar: 1 };
// foo = { bar: 2 };

// let a = [1, 2, 3];
// let b = a;
// b[0] = 10;
// console.log(a);

// let a = 5;
// if (true) {
//     let a = 10;
// }
// console.log(a);

// const arr = [1, 2, 3];
// arr.length = 0 ;
// console.log(arr);

// const obj = { a: 1, b: 2 };
// console.log('a' in obj);
// console.log('c' in obj);

// let a = 10;
// (function () {
//     console.log(a);
//     let a = 20;
// })();

// let foo = "Hello";
// (function () {
//     console.log(foo);
//     var foo = "Hi";
// })();

// const obj = { a: 1, b: 2 };
// Object.freeze(obj);
// obj.a = 10;
// console.log(obj.a);

// const a = Symbol("foo");
// const b = Symbol("foo");
// console.log(a === b);

// var a = ["1, 2, 3"];
// var b = ["1, 2, 3"];
// console.log(a === b);

// console.log([] + []);

// const _ = "abc"
// console.log(_)

// let i = 0;
// while (i < 3) {
//   setTimeout(() => console.log(i), 1000);
//   i++;
// }

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

// var x = 5;
// (function() {
//   console.log(x);
//   var x = 10;
// })();

// console.log( 0 && 45 )
// console.log( 75 && 55 )

// const sum = eval('10*10+5');
// console.log(sum)

// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);

// console.log(typeof typeof 1);

// setInterval(() => console.log('Hi'), 1000);

// function* generator(i) {
//     yield i;
//     yield i * 2;
//   }

//   const gen = generator(10);

//   console.log(gen.next().value);
//   console.log(gen.next().value);

// function func(name, callback){
//   console.log(`hello ${name}!`);
//   callback();
// }
// function bye() {
//   console.log("good bye")
// }
// func("bhargav",bye)

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// mySecond();

// const x = [1,2,3,4,5]
// const [a,b] = x
// console.log(a)

// const obj1 = {a:1,b:20}
// const {a,b} = obj1
// console.log(b)

// const numbers = [];
// const obj = { a: 18, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// console.log(obj.a)


// const obj = {}
// obj.name = "bhargav"
// obj["age"] = 25;
// console.log(obj)


// const name = "bhargav";
// const age = 25;

// const obj ={name,age}
// console.log(obj)


// const key = "emial"
// const obj = {
// 	[key]: "bhargavdangar2004@gmail.com"
// }
// console.log(obj)

// const person = {
// 	firstName:"bhragav",
// 	lastname:"Dangar"
// }
// Object.defineProperty(person,"fullName",{
// get:function(){
// 	return this.firstName + " " +this.lastname
// },
// set:function(name){
//  var parts = name.split(" ")
//  this.firstName = parts[0]
//  this.lastname = parts[1]
// }
// })

// console.log(person.fullName)

// person.fullName = "Bhargav Dangar";

// console.log(person.firstName);
// console.log(person.lastname)
// console.log(person.fullName)

// const x = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// }
// ({ a, b, c } = x);
// console.log(a, b, c);


// function tag(strings, value) {
//     console.log(strings, value);
//   }
  
//   const name = "bhargav";
//  console.log(`hello ${name}`)


// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// for (let key in car) {
//     console.log([key],car);
// }


// let x = "100";
// let y = "10";
// let z = x + y;
// console.log(z);


// console.log(typeof Symbol)

// console.log(2E12);


