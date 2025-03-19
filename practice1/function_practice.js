// First-Class Function
const sayHello = function(name) {
    return `Hello, ${name}!`;
};


// Higher-Order Function (HOF)
function operate(fn, value) {
    return fn(value);
}
console.log(operate(sayHello, "bhargav")); 

// Callback Function
setTimeout(() => console.log("Callback executed!"), 1000);

// Function Expression
const square = function(x) {
    return x * x;
};
console.log(square(4)); 

// Function Declaration
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
