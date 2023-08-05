// 5 Aug 2023

// CodeWars 8Ku Square(n) Sum

// JavaScript

// Task:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers){
  let subtotal = 0
  numbers.forEach( function(value){
    let squareNumber = value ** 2
    subtotal += squareNumber
  })
  return subtotal
}

// Test
squareSum([1,2]) // --> 5
squareSum([0, 3, 4, 5]) // --> 50
squareSum([]) //--> 0