// function hello({a = 5 ,b}){
//  return a * b

// }
// console.log(hello({}))

// console.log("hello world")
// function hello(){
//     console.log("hello")
// }
// hello();

// for(let i=0; i<5; i++){
//     console.log(i)
// }

// var path = require('path');

// var path = require('path');

// var ext = path.extname('./practice/task/deletefile.js');
// console.log(ext);

// console.log(path.isAbsolute('/practice/task/deletefile.js'))

// var x = path.join('practice','task','writefile.js')
// console.log(x)

// Including the module into out project
// var process = require('process');

// // It will return the current working directory
// console.log('this is the working directory --> ' + process.cwd());

// // It will return the version of process we are using
// console.log('this is the process version --> ' + process.version);

// // It will return the type of OS we are using at that time.
// console.log('current OS we are using --> ' + process.platform);

// function hello(){
//     const result =  new promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log("hello bhargav")
//         }, 2000);
//     })
//     console.log(result)
// }

// let ans = hello(1)
// .then(hello(2))
// .then(hello(3))
// .then(hello(4))
// .catch(function(err){
//     console.log(err.message)
// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const  EventEmitter = require('events')

// let eventEmitter  = new EventEmitter();

// eventEmitter.on('myevent',(msg)=>{
//     console.log(msg)
// })
// eventEmitter.emit("myevent","hello bhargav")

// const EventEmitter = require("events");

// let eventEmitter = new EventEmitter();

// let name1 = (msg) => {
//     console.log('bhargav',msg)
// }
// let name2 = (msg) => {
//     console.log("dangar",msg)
// }

// eventEmitter.on('myevent',name1);
// eventEmitter.on('myevent',name1);
// eventEmitter.on('myevent',name2);

// eventEmitter.removeListener('myevent',name1)

// // eventEmitter.removeAllListeners('myevent')

// eventEmitter.emit('myevent','eventOcured')

//////////////////////////////////////////////////////////////////////////////////////////////

// const EventEmitter = require("events");

// let eventEmitter = new EventEmitter();

// eventEmitter.on("error", (err) => {
//   console.error(" There was an error");
// });

// eventEmitter.on("newListener", (event, listener) => {
//   console.log(`The listener is added to ${event}`);
// });

// eventEmitter.on("removeListener", (event, listener) => {
//   console.log(`The listener is removed from ${event}`);
// });



// let name1 = (msg) => {
//   console.log(" BHARGAV " + msg);
// };

// let name2 = (msg) => {
//   console.log("BHARGAV " + msg);
// };

// eventEmitter.on("myEvent", name1);
// eventEmitter.on("myEvent", name2);

// eventEmitter.removeListener("myEvent",name2);

// eventEmitter.emit("myEvent", "Event occurred");

// eventEmitter.emit("error", new Error("Attention!"));




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const EventEmitter = require("events");

// let eventEmitter = new EventEmitter();

// let name1 = (msg) => {
//   console.log("BHARGAV"+msg);
// };

// let name2 = (msg) => {
//   console.log("DANGAR"+msg);
// };
 
// eventEmitter.on('myevent',name1)
// eventEmitter.on('myevent',name2)

// eventEmitter.removeListener('myevent',name1)

// eventEmitter.emit('myevent',' event occuur')



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const EventEmitter = require('node:events');
// const myEE = new EventEmitter();
// myEE.on('foo', () => console.log('a'));
// myEE.prependListener('foo', () => console.log('b'));
// myEE.emit('foo');
 

///////////////////////////////////////////////////////////////////////////////////////////////////////


// const EventEmitter = require('events');

// let eventEmitter = new EventEmitter();

// class School extends EventEmitter {
//   startClass() {
//     console.log('Class start');
//     eventEmitter.emit("this time is learning");
//   }
// }

// const school = new School();


// school.on('bellRing', (message) => {
//   console.log('Bell ring:', 'all student in class');
// });


// school.startClass();
