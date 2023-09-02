// *Variables*

// Declare a variable and assign it to a sentence that is a positive affirmation. 
//Print the affirmation to the console multiple times using a method
let mySentence = 'Count your blessings'
function myAffirmation(number){
    for(i=0; i < Number(number); i++){
        console.log(mySentence)
    }
}
myAffirmation(11);

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let myWord = ['G', 'o', 'c', 'h', 'u', 'k', 'i']
myWord = myWord.join("")
console.log(myWord)

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible

function playGame(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1){
        return 'rock'
    } else if(randomNumber == 2){
        return 'paper'
    } else if(randomNumber == 3){
        return 'lizard'
    } else if(randomNumber == 4){
        return 'spock'
    }
}
console.log(playGame())
