//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


// let age = 36;

// if(age < 16){
//     console.log('You cannot drive');
// } else if( age < 18) {
//     console.log('You cannot cant hate from outside the club, because they cant even get in');
// } else if(age < 21){
//     console.log('You cannot have a drink');
// } else if(age < 25) {
//     console.log('You cannot rent cars affordably');
// } else if(age < 30) {
//     console.log('You cannot rent fancy cars affordably');
// } else if(age >= 30){
//     console.log('There is nothing left to look forward too');
// };


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('#submit').addEventListener('click', runFunction)

function runFunction(){
    console.log('Function executed')
    let inputValue = Number(document.querySelector('#danceDanceRevolution').value);
    console.log('Input value: ' + inputValue)
    let outputText = checkAge(inputValue)
    console.log(outputText)
    document.querySelector('#textHere').innerText = `Your age is ${inputValue}. This means: ${outputText}`
}

function checkAge(number){
    let age = number;
    let text = ''
    if(age < 16){
        text = 'You cannot drive';
    } else if( age < 18) {
        text = 'You cannot cant hate from outside the club, because they cant even get in';
    } else if(age < 21){
        text = 'You cannot have a drink';
    } else if(age < 25) {
        text = 'You cannot rent cars affordably';
    } else if(age < 30) {
        text = 'You cannot rent fancy cars affordably';
    } else if(age >= 30){
        text = 'There is nothing left to look forward too';
    };
    return text
}