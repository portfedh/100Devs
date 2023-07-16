// Global variables
// ****************
let jsonData;
let dishJsonData;
let numberOfResults = '5'
let apiKey = '44e475e194eb44ec9cd193750fb44a71'


// Listen for click
// ****************
document.querySelector('#submit-button').addEventListener('click', controllerFunction)


// Controller function
// *******************
function controllerFunction(){
  console.log(`Search text: ${readSearch()}`)
  console.log(`Cuisine Query: ${readCuisine()}`)
  console.log(`Intolerances Query: ${readIntolerances()}`)
  console.log(`Meal Type Query: ${readMealType()}`)
  console.log(`Max Carbs: ${readMaxCarbs()}`)
  console.log(`Api URL: ${createUrl()}`)
  callApi()
  .then((data) => {
    jsonData = data;
    writeResultsTable();
  })
  .catch((error) => {
    console.log('API call failed:', error);
  });



}


// Read user search query
// **********************
function readSearch(){
  let searchObj = document.getElementById("searchQuery").value.replace(/\s/g, '').toLowerCase();
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
    // console.log(cuisines)
    // Filter the list to leave selected items
    let cuisineStrings = [];
    for (let obj of cuisines) {
        if (obj.selected) {
          cuisineStrings.push(obj.cuisine);
        }
      }
    // console.log(cuisineStrings)
    // Create string query for API
    let appendedString = cuisineStrings.join(',');
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
    let intolerance = [Dairy, Egg, Gluten, Grain, Peanut, Seafood, Sesame, Shellfish, Soy, Sulfite, Wheat, TreeNut]
    // Filter list for selected intolerances
    let selectedIntolerance = [];
    for (let obj of intolerance) {
        if (obj.selected) {
          selectedIntolerance.push(obj.intolerance);
        }
      }
    // Create string query for API
    let appendedString = selectedIntolerance.join(',');
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
    // List of all possible meal types
    let mealType = [ maincourse, sidedish, dessert, appetizer, salad, bread, breakfast, 
      soup, beverage, sauce, marinade, fingerfood, snack, drink
    ]
    // Filter list for selected intolerances
    let selectedMeal = [];
    for (let obj of mealType) {
        if (obj.selected) {
          selectedMeal.push(obj.mealType);
        }
      }
    // Create string query for API
    let appendedString = selectedMeal.join(',');
    return appendedString
}


// Get max carbs
// *************
function readMaxCarbs(){
  let maxCarbs = document.getElementById("maxCarbs");
  var inputValue = maxCarbs.value;
  return inputValue
}


// Create Main API URL
// *******************
function createUrl(){
  let baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
  let query = readSearch()
  let cuisine = readCuisine()
  let intolerances = readIntolerances()
  let mealType = readMealType()
  let maxCarbs = readMaxCarbs()

  let apiUrl = baseUrl + '?' +
            'apiKey=' + apiKey + '&' +
            'query=' + query + '&' +
            'cuisine=' + cuisine + '&' +
            'intolerances=' + intolerances + '&' +
            'type=' + mealType + '&' +
            'maxCarbs=' + maxCarbs + '&' +
            'number=' + numberOfResults
            ;
  return apiUrl
}

// Create Dish API URL
// *******************
function createDishUrl(id){
  let dishUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`
  return dishUrl
}


// Call main API
// *************
function callApi(){
  // Make the api url
  let apiUrl = createUrl()

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





// Add results to page
// *******************
function writeResults(){
  // Get a reference to the container to add results
  const container = document.getElementById("container");

  // Delete any ul from previous searches
  if (document.querySelector('ul') == null) {
    // Pass
  } else {
    document.querySelector('ul').remove();
  }
  // Create an unordered list 
  const ulElement = document.createElement("ul");
  // Append the unordered list to container
  container.appendChild(ulElement);

  // Iterate through results
  for(i=0; i < jsonData.number; i++){

    let title = jsonData.results[i].title;
    let id = jsonData.results[i].id;
    let image = jsonData.results[i].image;

    callDishApi(id)
    .then((data) => {
      dishJsonData = data;
    })
    .catch((error) => {
      console.log('API call failed:', error);
    });



    // Create a new element
    const liElement = document.createElement("li");
    // Create a new anchor element
    const anchorElement = document.createElement("a");
    // Set the URL as the href attribute of the anchor element
    anchorElement.href = dishJsonData.sourceUrl;
    // Set the text content for the anchor element
    anchorElement.textContent = title;
    // Append the anchor element to the list item
    liElement.appendChild(anchorElement);
    // Append the list item to the unordered list
    ulElement.appendChild(liElement);

  }
}

// Add results to page (Table version)
// ************************************
function writeResultsTable(){
  // Get a reference to the container to add results
  const container = document.getElementById("container-table");

  // Delete any ul from previous searches
  if (document.querySelector('table') == null) {
    // Pass
  } else {
    document.querySelector('table').remove();
  }
  // Create a new table
  const tableElement = document.createElement("table");
  // Append the table to the container
  container.appendChild(tableElement);
  // Create a row
  const tableHeaderRow = document.createElement("tr");
   // Append the row to the table
  tableElement.appendChild(tableHeaderRow);
  // Create header 1
  let tableHeader1 = document.createElement("th");
  let headerOneText = document.createTextNode("Recipe Name");
  tableHeader1.appendChild(headerOneText);
  tableHeaderRow.appendChild(tableHeader1)
  // Create header 2
  let tableHeader2 = document.createElement("th");
  let headerTwoText = document.createTextNode("Image");
  tableHeader2.appendChild(headerTwoText);
  tableHeaderRow.appendChild(tableHeader2)


  // Iterate through results
  for(i=0; i < jsonData.number; i++){

    let title = jsonData.results[i].title;
    let id = jsonData.results[i].id;
    let image = jsonData.results[i].image;

    // Create a new table row
    const newTr = document.createElement("tr");

    // Create Recipe name data
    // ************************
    // Create a new table data
    const newTd = document.createElement("td");
    // Create a new anchor element
    const anchorElement = document.createElement("a");
    // Set the URL as the href attribute of the anchor element
    anchorElement.href = id;
    // Set the text content for the anchor element
    anchorElement.textContent = title;
    // Append the anchor element to the table data
    newTd.appendChild(anchorElement);
    // Append the table data item to the table row
    newTr.appendChild(newTd);

    // Create Recipe image
    // *******************
    // Create a new table data
    const newTd2 = document.createElement("td");
    // Create a new image element
    const imageElement = document.createElement("img");
    // Set the source attribute and alt text
    imageElement.src = image;
    imageElement.alt = title;
    // Append the image element to the table data
    newTd2.appendChild(imageElement);
    // Append the table data item to the table row
    newTr.appendChild(newTd2);

    // Append the table row to the table
    tableElement.appendChild(newTr);

  }
}
