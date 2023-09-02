// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'pizza';
food = 'Ramen'
alert('My favorite food is: ' + food)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let cat = "Oreo";
alert(cat[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function myFunc(number1, number2, number3) {
    product = number1/number2 * number3
    alert(product)
}
myFunc(6, 3, 2);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeMe(number1) {
    product = number1 ** 3
    alert(product)
}
cubeMe(3);


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isJanuary(month) {
    if (month === 'January') {
        alert('Yay');
    } else {
        alert('Boo')
    }
}
isJanuary('January');
isJanuary('February');

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function myNumber(number){
    for (i=0; i < number; i++) {
        if(i % 5 !== 0){
            alert(i)
        } 
    }
}
myNumber(5);
    