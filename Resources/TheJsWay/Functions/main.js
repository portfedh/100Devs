// Write Functions

// Coding time

// Task 1
  // TODO: ask user for first and last name
  // TODO: call sayHello() and show its result

// alert('Hello! Please enter your fist name and last name');
// userFirstName = prompt('Please enter your first name.');
// userLastName = prompt('Please enter your last name');

// answer = sayHello(userFirstName, userLastName);
// alert(answer);

// // Say hello to the user
// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     return message;
//   }


// Task 2
// Square the given number x
function square1(x) {
return x * x
}
console.log('Square 1 function');
console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25
console.log(square1(6)); // Must show 36

// Square the given number x
const square2 = x => { return x * x}
console.log('Square 2 function');
console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
console.log(square2(6)); // Must show 36

// Task 3
// TODO: write the min() function

function min(x, y) {
if (x <= y) {
return x;
} else if (y < x) {
return y;
}
}
console.log('Min function');
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1


// Task 4
// Basic calculator

function calculate( x, symbol, y) {
    if (symbol === "+") {
        return x + y;
    } else if (symbol === "-") {
        return x - y;
    } else if (symbol === "*") {
        return x * y;
    } else if (symbol === "/") {
        return x / y;
    }
};
console.log('Calculate function');
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity


// Task 5
// Circumference and area of a circle
function circumference( x) {
    if (symbol === "+") {
        return x + y;
    } else if (symbol === "-") {
        return x - y;
    } else if (symbol === "*") {
        return x * y;
    } else if (symbol === "/") {
        return x / y;
    }
};
