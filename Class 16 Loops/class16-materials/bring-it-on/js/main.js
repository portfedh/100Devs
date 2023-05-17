// *Variables*
// Create a variable and console log the value
let value = 36;
console.log(value);

// Create a variable, add 10 to it, and alert the value
let newValue = 27;
newValue += 10;
alert(value);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(number){
    alert(number -4)

}
subtractFour(20);

// Create a function that divides one number by another and returns the remainder

function remainder(num1, num2){
    remainder = num1 % num2
    alert(remainder)
}
remainder(10, 3);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function conditional(num1, num2){
    if( (num1 + num2) > 50){
        alert('Jumanji')
    }
}
conditional(41,10);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyMe(num1, num2, num3){
    if((num1+num2+num3) % 3 == 0){
        alert('zebra')
    }
}
multiplyMe(1,2,3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopMe(word, number){
    for(i=0; i < number; i++){
        console.log(word)
    }
}

loopMe('Nutria', 5);