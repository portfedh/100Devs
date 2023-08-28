// Code 01:
// ========
// Functions with no delays.
// Called and run sequentially.
// They return in the same order as they were called. 

// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     console.log('Paper delivered to house 2')
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()
// Response: --> house 1, house 2, house 3


// Code 02:
// ========
// Delay is added to house 2.
// They are called in order.
// As expected, house 1 and 3 print immediately. 
// House 2, waits for its timer to end and prints to console last.

// This is how setTimout function works:
// setTimeout(callbackFunction, delay);

// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     setTimeout(() => console.log('Paper delivered to house 2'), 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()
// Response: --> house 1, house 3, house 2

// Code 03:
// ========
// Functions are called in order. 
// House1 prints to console immediately. 
// House2 sets a timer of 3 seconds. 
// At the end of the timer, it console logs House2.
// After that it calls house 3 function
// Which also prints to console immediately. 

// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(callback){
//     setTimeout(() => {
//         console.log('Paper delivered to house 2')
//         callback()
//     }, 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo(houseThree)
// Response --> House 1, 3 sec pause, house 2, house 3 

// Code 04:
// ========
// Example of callback hell.
// Code waits 5 seconds, then console logs house 1 and a new timeout
// Code waits 4 seconds, then console logs house 2 and a new timeout
// Code waits 3 seconds, then console logs house 3 and a new timeout

// function houseOne(){
//     setTimeout(() => {
//         console.log('Paper delivered to house 1')
//         setTimeout(() => {
//             console.log('Paper delivered to house 2')
//             setTimeout(() => {
//                 console.log('Paper delivered to house 3')
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }
// houseOne()
// Response --> 5 sec delay, house 1, 4 sec delay, house 2, 3 sec delay, house 3

// Code 05:
// ========
// Example of how we would use a promise. 
// We must give resolve or reject conditions
// .then and .catch will execute after promise has completed.
// .then runs after resolving the promise.
// .catch runs if the promise is rejected.
// const promise = new Promise((resolve, reject) => {
//     const error = false
//     if(!error){
//         resolve('Promise has been fulfilled')
//     }else{
//         reject('Error: Operation has failed ')
//     }
// })
// console.log(promise)
// promise
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Code 06:
// ========
// This code uses promises instead of callbacks to simulate the newspaper deliveries. 

// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }
// houseOne()
//     .then(data => console.log(data))
//     // We cant use console.log(houseOne()) because it will print the object.
//     .then(houseTwo)
//     // We don't use parenthesis to show its an argument for the Then function.
//     // If we add parenthesis it will execute immediately.
//     .then(data => console.log(data))
//     .then(houseThree)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Code 07:
// =======
// Uses the new async await syntactic sugar for promises. 
// Works in the same way, but is much easier to read.

// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }

// async function getPaid(){
//     const houseOneWait = await houseOne()
//     const houseTwoWait = await houseTwo()
//     const houseThreeWait = await houseThree()
//     console.log(houseOneWait)
//     console.log(houseTwoWait)
//     console.log(houseThreeWait)
// }
// getPaid()

// Code 08
// =======
// A real world example using the async await syntax to call an api.

// async function getACuteDogPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getACuteDogPhoto()

