//--- Easy
//create a variable and assign it a number
let myNumber = 36;

//minus 10 from that number
myNumber -= 10;
// --> 26

//print that number to the console
console.log(myNumber)

//--- Medium
//create a variable that holds a value from the input
let userValue = document.querySelector('#inputText').value

// Write 30 as an input value
// add 25 to that number
userValue = Number(userValue) + 25;

//alert that number
alert(userValue);

//--- Hard
//create a variable that holds the h1
let myHeading = document.querySelector('#theHeading')

//add an event listener to that element 
// that console logs the sum of the two previous variables
myHeading.addEventListener('click', sumFunction);

function sumFunction(){
    let subtotal = Number(myNumber) + Number(userValue)
    console.log( `Subtotal is: ${subtotal} `)
    return subtotal
}