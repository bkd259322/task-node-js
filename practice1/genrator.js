//         simple genrator

// function* simpleGen() {
//     yield "A";
//     yield "B";
//     yield "C";
// }
// const result = simpleGen();
// console.log(result.next().value)
// console.log(result.next().value)
// console.log(result.next().value)
// console.log(result.next().value)



//         Infinite Generator

// function* infiniteGen(){
//     let num = 0;
//     while (true) {
//         yield num++
//     }
// }
// const result = infiniteGen()
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())



//  Delegating Generator 


// function* subGen(){
//     yield "1";
//     yield "2";
// }

// function* minGen(){
//     yield "start";
//     yield* subGen();
//     yield "end";
// }

// function* mainGen(){
//     yield "restart";
//     yield* subGen();
//     yield* minGen();
// }

// const gen = mainGen();
// console.log([...gen])