// *Variables*

// Create a variable and console log the value
var myVariable = 'The Cat in a hat.'
console.log(myVariable)


// Create a variable, add 10 to it, and alert the value
var myVariable2 = 10;
myVariable2 += 10;
console.log(myVariable2);

// *Functions*

// Create a function that subtracts 4 numbers and alerts the difference
function myFunction(a, b, c, d) {
    let result = a - b - c - d;
    return result;
}
alert(myFunction(10, 1, 2, 3))

// Create a function that divides one number by another and returns the remainder
function myRemainder(a, b) {
    return a % b;
}
alert(myRemainder(10, 3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addNum(a, b) {
    addition = a + b;
    if (addition > 50) { alert('Jumanji')};
}
addNum(40, 11);


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(a, b, c) {
    result = a * b * c

    if ( result % 3 == 0 ) {
        alert('Zebra!')
    }
}
multiplyThree( 2, 7 , 1);