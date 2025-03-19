// Create an array of your favorite fruits and log each fruit to the console using a loop:
const fruit = ["apple","mango","bannana","Cherry"]
fruit.forEach(fruit => console.log(fruit))


// Find the length of an array that contains 5 numbers:
const arr1 = [1,2,3,4,5]
console.log(arr1.length)

// Check if a number exists in an array using the includes() method:
const arr2 = [1,2,3,4,5]
console.log(arr2.includes(2));
console.log(arr2.includes(8));

// Reverse an array and print the result:
const arr3 = [1,2,3,4,5]
console.log(arr3.reverse())

// Remove the last element of an array using the appropriate method:
const arr4 = [1,2,3,4,5]
console.log(arr4.pop())
console.log(arr4)


// Add a new element to the beginning of an array:
const arr5 = [1,2,3,4,5]
console.log(arr5.unshift(50))
console.log(arr5)


// Sort an array of numbers in ascending and descending order:
const arr6 = [15,19,22,37,8,5,6,9,4]
console.log(arr6.sort((a,b)=> a - b));
console.log(arr6.sort((a,b)=> b - a));


// Filter all even numbers from an array of numbers:
const arr7 = [1,2,3,4,5,6]
const evenNum = arr7.filter(num => num % 2 == 0)
console.log(evenNum)

// Map an array of numbers to their squares:

const arr8 = [1,2,3,4,5,6,7,8,9]
let squre = arr8.map(num => num * num)
console.log(squre)

//Find the sum of all numbers in an array using reduce():

const arr9 = [1,2,3,4,5,6,7,8,9]
const sum = arr9.reduce((acc,curr)=> acc + curr , 0)
console.log(sum)

//Find the maximum and minimum value in an array of numbers:

const arr10 = [1,2,3,4,5,6,7,8,9]
const max = Math.max(...arr10)
const min = Math.min(...arr10)
console.log(max)
console.log(min)

//Combine two arrays into a single array:

const a = [1,2,3,4,5];
const b = [6,7,8,9,10];
const combine = a.concat(b)
console.log(combine)