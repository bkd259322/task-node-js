///Function Scope:

// function even(Number) {
//   let sum = 0; 
//  for(let i = 0; i < Number.length; i++){
//   if(Number[i] % 2 === 0){
//     sum += Number[i]
//   }
//  }
//    return sum;
// }
// const array = [1,2,3,4,5,6]
// const result = even(array)
// console.log(result)




// Scope Chain:

// function first(){
//   let message = "this is aa first";
//   console.log("inside a function",message)

//   second();
//   console.log("back in first",message)
// }

// function second(){
//   let message = "this is a second";
//   console.log("inside a second  function",message)
// }
// first();




////Function Scope vs Block Scope

// function first(){
//   let name = "bhargav dangar";
//   console.log("first function",name)
//   second();
// }

// function second(){
//   let name = "this function is a second";
//   console.log("second function",name)
// }
// first();


///IIFE (Immediately Invoked Function Expression

// function myFunction() {
//   var x = 10;
//   if (true) {
//     var x = 2;
//     console.log(x); 
//   }
//   console.log(x); 
// }
/// output is  undifind



////Scope Chain

// (function() {
//   var x = 5;
//   console.log(x); // outputs 5
// })();
// console.log(x); 

// output is x is not difined



//Block Scope with let and const


// function outerFunction() {
//   var x = 5;
//   function innerFunction() {
//     console.log(x); // outputs 5
//   }
//   innerFunction();
// }
// outerFunction();
//output is 5


