// The user will enter a cocktail. 
// Get a cocktail name, photo, and instructions 
// and place them in the DOM

// Cocktail objects
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



for(i=0; i<cocktails.length; i++){
    if(inputText == cocktails[i].name){
        console.log(`Cocktail found`);
        console.log(`Name: ${cocktails[i].name}`);
        console.log(`Ingredients: ${cocktails[i].ingredients}`);
        console.log(`Photo: ${cocktails[i].photo}`);
    }

}




