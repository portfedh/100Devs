// The user will enter a cocktail. 
// Get a cocktail name, photo, and instructions 
// and place them in the DOM

// Cocktails Array
// ***************

let margarita = {
    name: 'margarita',
    ingredients: 'Tequila, Triple Sec and lime juice.',
    photo: 'Margarita.jpg'
}

let mojito = {
    name: 'mojito',
    ingredients: 'Ron, sugar, mint, lime, gas water',
    photo: 'Mojito.jpg'
}

let cocktails = [margarita, mojito]
console.log(`Available cocktails:`);
console.log(cocktails);

// DOM Manipulation
// ***********************

// Check for button click
document.getElementById('inputButton').addEventListener("click", checkCocktail);

// Controller function
function checkCocktail(){
    // Read input
    let userInput = readInput();
    // Check if cocktail is in db and update DOM
    let checkDb = checkCocktails(userInput);
}

// Read user input function
function readInput(){
    let userInput = document.getElementById('inputText').value
    console.log(`User Input: ${userInput}`)
    return userInput
}

// Check input value with array
function checkCocktails(inputText){
    for(i=0; i<cocktails.length; i++){
        if(inputText == cocktails[i].name){
            // Display in console
            console.log(`Cocktail found`);
            console.log(`Name: ${cocktails[i].name}`);
            console.log(`Ingredients: ${cocktails[i].ingredients}`);
            console.log(`Photo: ${cocktails[i].photo}`);
            // Update DOM
            document.querySelector('#cocktailName').innerText = cocktails[i].name;
            document.querySelector('#cocktailImage').setAttribute("src", cocktails[i].photo);
            document.querySelector('#cocktailIngredients').innerText = cocktails[i].ingredients;
            return
        } else {
            console.log(`Cocktail not found`);
            document.querySelector('#cocktailName').innerText = "Cocktail not found";
            document.querySelector('#cocktailImage').setAttribute("src", "");
            document.querySelector('#cocktailIngredients').innerText = "";
        }
    }
}