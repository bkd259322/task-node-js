
// let myPromise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("code is runnig......")
//     }else{
//         reject("code is reject......")
//     }
// })

// myPromise
// .then(result =>{
//     console.log(result)
//     return "another function"
// })
// .then(newReult =>{
//     console.log(newReult)
// })
// .catch(Error =>{
//     console.log(Error)
// })



// let fatchData = new Promise((resolve, reject) =>{
//     let datafatched = true;
//     if(datafatched){
//         resolve("data fatched succesfully")
//     }else{
//         reject("data is missing....try again...")
//     }
// })
// fatchData
// .then(response => console.log(response))
// .catch(Error => console.log(Error))


//// promise method => all, allSettled, race, any, resolve/Reject

// 1 promoise.all

// const promise1 = Promise.resolve("first")
// const promise2 = Promise.resolve("second")
// const promise3 = Promise.resolve("third")


// Promise.all([promise1,promise2,promise3])
// .then(reult =>{
//     console.log(reult)
// })
// .catch(Error =>{
//     console.log(Error)
// })


// 2 promise.allSettled


// const promies1 = Promise.resolve("success")
// const promise2 = Promise.resolve("second")
// const promise3 = Promise.resolve(" another success")

// Promise.allSettled([promies1, promise2, promise3])
// .then(reult =>{
//     console.log(reult)
// })
// .catch(Error =>{
//     console.log(Error)
// })



//3 promies.race

// const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 700, "Second"));

// Promise.race([promise1, promise2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


//4 promies.any


// const promise1 = Promise.reject("First ");
// const promise2 = new Promise((resolve) => setTimeout(resolve, 0, "Second resolved"));
// const promise3 = Promise.resolve("Third ");

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error); 
//   });



// 5 promiese resolve/reject

// let resolvedPromise = Promise.resolve("Resolved");
// let rejectedPromise = Promise.reject("Rejected");

// resolvedPromise.then(console.log); 
// rejectedPromise.catch(console.log); 




// example of promise chaining 
// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(20), 1000);
//   })
//     .then(num => num * 2)
//     .then(num => num + 5)
//     .then(num => console.log(num)) 
//     .catch(error => console.log(error));
  

