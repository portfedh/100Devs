// Arrays
// *****

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [42,19,77,33,57]
let sum = nums.reduce( (acc,c) => acc + c, 0  )
alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function myArray(array){
    let tempArray = []
    for(let x=0; x<array.length; x++){
        let squared = array[x] * array[x]
        tempArray.push(squared)
    }
    return tempArray
}
console.log(myArray([1, 3, 5, 7]));

//Create a function that takes string
//Print the reverse of that string to the console

function reverseString(string){
    let split = string.split("")
    split.reverse()
    return split
}
console.log(reverseString("Hello"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function checkPalindrome(string){
    let reversedStr = string.split("").reverse().join("");
    return string === reversedStr;
}
console.log(checkPalindrome("hello"))