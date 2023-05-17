// *Variables*
// Declare a variable, assign it a value, and alert the value
let myVar;
myVar = 10;
alert(myVar);

// Create a variable, divide it by 10, and console log the value
let myVar2 = 34;
myVar2 /= 2;
console.log(myVar2);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function mult(num1, num2, num3){
    alert((num1*num2*num3));
};
mult(3,3,3);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function mixed(num1, num2, num3, num4){
    console.log((num1+num2-num3-num4));
};
mixed(4,5,1,3);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function condi(num1, num2, num3){
    let start = 100;
    start = (start + num1 - num2) / num3

    if(start > 25){
        console.log('We have a winna')
    }
}
condi(3, 2, 1);

// Create a function that takes in a day of the week. 
// If it is a weekend alert, "weekend" and if not alert "week day". 
// Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function weekday(day){
    let week = ['monday', 'tuesday', 'thursday', 'friday', 'saturday', 'sunday']
    day = day.toLowerCase();
    if(!week.includes(day)){
        alert('Try again')
    }
};
weekday('Someday');

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function loopMe(number){
    for(i=1; i<=number; i += 3) {
        console.log(i)
    }     
}

loopMe(30);