// Global variables
// ****************
// let jsonRecipe;  // en script 1
// let jsonRecipeUrl;  // en script 1
// let apiKey = '44e475e194eb44ec9cd193750fb44a71' // en script 1
// let dishNumber1 = '638879' // Temp code


// Create Dish API URL
// *******************
function createDishUrl(recipeId){
  let dishUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}&includeNutrition=false`
  return dishUrl
}


// Call dish API
// *************
function callDishApi(url){
  // Make the api url
  let apiUrl = createDishUrl(url)

  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      // Parse response as JSON
      .then(res => res.json())
      // Manipulate data
      .then(data => {
        resolve(data); // Resolve the promise with the parsed JSON data
      })
      .catch(err => {
        reject(err); // Reject the Promise with the error
      });
  });
}

// Calling the function example
// ****************************
// callDishApi(dishNumber1)
//   .then((data) => {
//     jsonRecipe = data;
//     jsonRecipeUrl = jsonRecipe.spoonacularSourceUrl;
//   })
//   .catch((error) => {
//     console.log('API call failed:', error);
//   });