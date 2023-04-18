// Program Structure

// Print Triangle:
// let x;
// let y = '#'
// for (x = 1; x <= 7; x++) {
//     console.log(y);
//     y = y + '#'
// }
// #
// ##
// ###
// ####
// #####
// ######
// #######


// Fizz Buzz Exercise:
// Print all numbers from 1 to 100
// Numbers divisible by 3 = 'Fizz'
// Numbers divisible by 5, not 3, = 'Buzz'
// Numbers divisible by 3 and 5 = 'FizzBuzz'
// let n;
// for (n = 1; n <= 100; n++) {
//     if ( n % 3 === 0 ) {
//         if ( n % 5 === 0 ) {
//             console.log('FizzBuz')
//         } else {
//             console.log('Fizz')
//         }
//     } else if ( n % 5 === 0) {
//         console.log('buzz')
//     } else {
//         console.log(n)
//     }
// }

// ChessBoard:
// function printChessBoard(rows, columns){
//     let x;
//     for (x = 1; x <= columns; x++) {
//         if (x % 2 == 0) {
//             printRowEven(rows);
//         } else {
//             printRowOdd(rows);
//         }
//     };
// }
// function printRowOdd(n) {
//     let x;
//     let row = [];
//     for (x = 1; x <= n; x++) {
//         if (x % 2 == 0 ) {
//             row = row + '#'
//         } else {
//             row = row + ' '
//         } 
//     };
//     console.log(row);
// }
// function printRowEven(n) {
//     let x;
//     let row = [];
//     for (x = 1; x <= n; x++) {
//         if (x % 2 == 0 ) {
//             row = row + ' '
//         } else {
//             row = row + '#'
//         } 
//     };
//     console.log(row);
// }
// printChessBoard(20, 15)


// Minimum

// The previous chapter introduced the standard function Math.min that returns its smallest argument. 
// We can build something like that now. Write a function min that takes two arguments and returns their minimum.
// // Your code here.
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10



// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
//     Zero is even.
//     One is odd.
//     For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
// // Your code here.
// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??


// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
// // Your code here.
// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4