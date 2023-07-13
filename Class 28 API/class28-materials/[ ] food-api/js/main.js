
// Listen for click
// ****************
document.querySelector('#submit-button').addEventListener('click', controllerFunction)

// Controller function
// *******************
function controllerFunction(){
  console.log(`Search text: ${readSearch()}`)
  console.log(`Cuisine Query: ${readCuisine()}`)
  console.log(`Intolerances Query: ${readIntolerances()}`)

}

// Read user search query
// **********************
function readSearch(){
  let searchObj = document.getElementById("searchQuery").value.replace(/\s/g, '');
  return searchObj
}

// Read user cuisine values
// ************************
function readCuisine(){
    let african = {cuisine: 'african', selected: document.getElementById("african").checked};
    let asian = {cuisine: 'asian', selected: document.getElementById("asian").checked};
    let american = {cuisine: 'american', selected: document.getElementById("american").checked};
    let british = {cuisine: 'british', selected: document.getElementById("british").checked};
    let cajun = {cuisine: 'cajun', selected: document.getElementById("cajun").checked};
    let caribbean = {cuisine: 'caribbean', selected: document.getElementById("caribbean").checked};
    let chinese = {cuisine: 'chinese', selected: document.getElementById("chinese").checked};
    let easternEuropean = {cuisine: 'easternEuropean', selected: document.getElementById("easternEuropean").checked};
    let european = {cuisine: 'european', selected: document.getElementById("european").checked};
    let french= {cuisine: 'french', selected: document.getElementById("french").checked};
    let german = {cuisine: 'german', selected: document.getElementById("german").checked};
    let indian = {cuisine: 'indian', selected: document.getElementById("indian").checked};
    let irish = {cuisine: 'irish', selected: document.getElementById("irish").checked};
    let italian = {cuisine: 'italian', selected: document.getElementById("italian").checked};
    let japanese = {cuisine: 'japanese', selected: document.getElementById("japanese").checked};
    let jewish = {cuisine: 'jewish', selected: document.getElementById("jewish").checked};
    let korean = {cuisine: 'korean', selected: document.getElementById("korean").checked};
    let latinamerican = {cuisine: 'latinamerican', selected: document.getElementById("latinamerican").checked};
    let mediterranean = {cuisine: 'mediterranean', selected: document.getElementById("mediterranean").checked};
    let mexican = {cuisine: 'mexican', selected: document.getElementById("mexican").checked};
    let middleeastern = {cuisine: 'middleeastern', selected: document.getElementById("middleeastern").checked};
    let nordic = {cuisine: 'nordic', selected: document.getElementById("nordic").checked};
    let southern = {cuisine: 'southern', selected: document.getElementById("southern").checked};
    let spanish = {cuisine: 'spanish', selected: document.getElementById("spanish").checked};
    let vietnamese = {cuisine: 'vietnamese', selected: document.getElementById("vietnamese").checked};
    // List of all possible cuisines
    let cuisines = [
      african, asian, american, british, cajun, caribbean, chinese, easternEuropean, 
      european, french, german, indian, irish, italian, japanese, jewish, korean, 
      latinamerican, mediterranean, mexican, middleeastern, nordic, southern, 
      spanish, vietnamese]
    console.log(cuisines)
    // Filter the list to leave selected items
    let cuisineStrings = [];
    for (let obj of cuisines) {
        if (obj.selected) {
          cuisineStrings.push(obj.cuisine);
        }
      }
    console.log(cuisineStrings)
    // Create string query for API
    let appendedString = 'cuisine=' + cuisineStrings.join(',');
    return appendedString
}
 
// // Get Intolerances
// // *****************
function readIntolerances(){
    let Dairy = {intolerance: 'Dairy', selected: document.getElementById("Dairy").checked};
    let Egg = {intolerance: 'Egg', selected: document.getElementById("Egg").checked};
    let Gluten = {intolerance: 'Gluten', selected: document.getElementById("Gluten").checked};
    let Grain = {intolerance: 'Grain', selected: document.getElementById("Grain").checked};
    let Peanut = {intolerance: 'Peanut', selected: document.getElementById("Peanut").checked};
    let Seafood = {intolerance: 'Seafood', selected: document.getElementById("Seafood").checked};
    let Sesame = {intolerance: 'Sesame', selected: document.getElementById("Sesame").checked};
    let Shellfish = {intolerance: 'Shellfish', selected: document.getElementById("Shellfish").checked};
    let Soy = {intolerance: 'Soy', selected: document.getElementById("Soy").checked};
    let Sulfite = {intolerance: 'Sulfite', selected: document.getElementById("Sulfite").checked};
    let Wheat = {intolerance: 'Wheat', selected: document.getElementById("Wheat").checked};
    let TreeNut = {intolerance: 'TreeNut', selected: document.getElementById("TreeNut").checked};
    // List of all possible intolerances
    let intolerance = [
      Dairy, Egg, Gluten, Grain, Peanut, Seafood, Sesame, Shellfish, Soy, Sulfite, Wheat, TreeNut
    ]
    // Filter list for selected intolerances
    let selectedIntolerance = [];
    for (let obj of intolerance) {
        if (obj.selected) {
          selectedIntolerance.push(obj.intolerance);
        }
      }
    // Create string query for API
    let appendedString = 'intolerances=' + selectedIntolerance.join(',');
    return appendedString
}

// // Get MealType
// // *************
function readMealType(){
    let maincourse = {mealType: 'maincourse', selected: document.getElementById("maincourse").checked};
    let sidedish = {mealType: 'sidedish', selected: document.getElementById("sidedish").checked};
    let dessert = {mealType: 'dessert', selected: document.getElementById("dessert").checked};
    let appetizer = {mealType: 'appetizer', selected: document.getElementById("appetizer").checked};
    let salad = {mealType: 'salad', selected: document.getElementById("salad").checked};
    let bread = {mealType: 'bread', selected: document.getElementById("bread").checked};
    let breakfast = {mealType: 'breakfast', selected: document.getElementById("breakfast").checked};
    let soup = {mealType: 'soup', selected: document.getElementById("soup").checked};
    let beverage = {mealType: 'beverage', selected: document.getElementById("beverage").checked};
    let sauce = {mealType: 'sauce', selected: document.getElementById("sauce").checked};
    let marinade = {mealType: 'marinade', selected: document.getElementById("marinade").checked};
    let fingerfood = {mealType: 'fingerfood', selected: document.getElementById("fingerfood").checked};
    let snack = {mealType: 'snack', selected: document.getElementById("snack").checked};
    let drink = {mealType: 'drink', selected: document.getElementById("drink").checked};

}








    // // Get max carbs
    // // *************
    // let maxCarbs = document.getElementById("maxCarbs").checked;



  // Create the url to call the api
  // ******************************
//   let apiUrl = 'https://newsapi.org/v2/everything?' +
//             'q=' +
//             search +
//             '&' +
//             'from=' +
//             formattedDate +
//             '&' +
//             'sortBy=popularity&' +
//             'apiKey=6320f961210745a9bf655842d076b524';
//   console.log("URL is: " + apiUrl);

// }


// // Call the API
//   // ************
//   var req = new Request(apiUrl);
//   fetch(req)
//       // Parse response as JSON
//       .then(res => res.json())
//       // Manipulate data
//       .then(data => {
//         // Display all results in console
//         console.log(data)

//         // Define number of results to display in page
//         let maxResults = 10
//         let results = Number(data.totalResults)
//         console.log(`Results found: ${results}`)
//         if(results >= maxResults){
//             resultsLength = maxResults
//         } else {
//             resultsLength = results
//         }
        
//         // Get a reference to the container to add results
//         const container = document.getElementById("container");
//         // Delete any unordered lists
//         if (document.querySelector('ul') == null) {
//             // Pass
//         } else {
//             document.querySelector('ul').remove();
//         }
        
//         // Create an unordered list 
//         const ulElement = document.createElement("ul");
//         // Append the unordered list to container
//         container.appendChild(ulElement);

//         // Iterate through results
//         for(i=0; i < resultsLength; i++){
//             let articleTitle = data.articles[i].title;
//             let articleUrl = data.articles[i].url;
//             let articleSource = data.articles[i].source.name

//             // Create a new element
//             const liElement = document.createElement("li");
//             // Create a new anchor element
//             const anchorElement = document.createElement("a");
//             // Set the URL as the href attribute of the anchor element
//             anchorElement.href = articleUrl;
//             // Set the text content for the anchor element
//             anchorElement.textContent = articleTitle + ", " + articleSource;
//             // Append the anchor element to the list item
//             liElement.appendChild(anchorElement);
//             // Append the list item to the unordered list
//             ulElement.appendChild(liElement);
//         }

//         // For Debugging
//         console.log(`Article Title: ${data.articles[0].title}`)
//         console.log(`Article Description: ${data.articles[0].description}`)
//         console.log(`Article Author: ${data.articles[0].author}`)
//         console.log(`Article Content: ${data.articles[0].content}`)
//         console.log(`Article Url: ${data.articles[0].url}`)
//         console.log(`Article Image: ${data.articles[0].urlToImage}`)
//         console.log(`Article Published: ${data.articles[0].publishedAt}`)
//         console.log(`Article Source: ${data.articles[0].source.name}`)

//       })
//       .catch(err => {
//         console.log(`error ${err}`)
//       })







