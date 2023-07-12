
// Listen for click
// ****************
document.querySelector('#submit-button').addEventListener('click', readForm)


// Read the form and call the API
// ******************************

function readForm(){

    // Get the search query
    // ************************
    let searchObj = document.getElementById("searchQuery").value.replace(/\s/g, '');
    console.log(`Search text: ${searchObj}`)

    // Get cuisine values
    // ******************
    let african = {cuisine: 'african', selected: document.getElementById("african").checked};
    let asian = {cuisine: 'asian', selected: document.getElementById("asian").checked};
    let american = {cuisine: 'american', selected: document.getElementById("american").checked};
    let british = document.getElementById("british").checked;
    let cajun = document.getElementById("cajun").checked;
    let caribbean = document.getElementById("caribbean").checked;
    let chinese = document.getElementById("chinese").checked;
    let easternEuropean = document.getElementById("easternEuropean").checked;
    let european = document.getElementById("european").checked;
    let french= document.getElementById("french").checked;
    let german = document.getElementById("german").checked;
    let indian = document.getElementById("indian").checked;
    let irish = document.getElementById("irish").checked;
    let italian = document.getElementById("italian").checked;
    let japanese = document.getElementById("japanese").checked;
    let jewish = document.getElementById("jewish").checked;
    let korean = document.getElementById("korean").checked;
    let latinamerican = document.getElementById("latinamerican").checked;
    let mediterranean = document.getElementById("mediterranean").checked;
    let mexican = document.getElementById("mexican").checked;
    let middleeastern = document.getElementById("middleeastern").checked;
    let nordic = document.getElementById("nordic").checked;
    let southern = document.getElementById("southern").checked;
    let spanish = document.getElementById("spanish").checked;
    let vietnamese = document.getElementById("vietnamese").checked;

    // List of all possible cuisines
    let cuisines = [african, asian, american]
    // let cuisines = [african, asian, american, british, cajun, caribbean, chinese, easternEuropean, european, french, german, indian, irish, italian, japanese, jewish, korean, latinamerican, mediterranean, mexican, middleeastern, nordic, southern, spanish, vietnamese]
    console.log(cuisines)

    // Filter the list to leave items with true values
    let cuisineStrings = [];
    for (let obj of cuisines) {
        if (obj.selected) {
          cuisineStrings.push(obj.cuisine);
        }
      }
    console.log(cuisineStrings)

    // Create string query for API
    let appendedString = 'cuisine=' + cuisineStrings.join(',');
    console.log(appendedString);

    // const filteredCuisines = cuisines.filter(item => item.selected === true);
    // console.log(filteredCuisines)



    // // Cuisine check
    // // *************
    // console.log(`cuisineAfrican: ${cuisineAfrican}`)
    // console.log(`cuisineAsian: ${cuisineAsian}`)
    // console.log(`cuisineAmerican: ${cuisineAmerican}`)
    // console.log(`cuisineBritish: ${cuisineBritish}`)
    // console.log(`cuisineCajun: ${cuisineCajun}`)
    // console.log(`cuisineCaribean: ${cuisineCaribean}`)
    // console.log(`cuisineChinese: ${cuisineChinese}`)
    // console.log(`cuisineEasternEuropean: ${cuisineEasternEuropean}`)
    // console.log(`cuisineEuropean: ${cuisineEuropean}`)
    // console.log(`cuisineFrench: ${cuisineFrench}`)
    // console.log(`cuisineGerman: ${cuisineGerman}`)
    // console.log(`cuisineIndian: ${cuisineIndian}`)
    // console.log(`cuisineIrish: ${cuisineIrish}`)
    // console.log(`cuisineItalian: ${cuisineItalian}`)
    // console.log(`cuisineJapanese: ${cuisineJapanese}`)
    // console.log(`cuisineJewish: ${cuisineJewish}`)
    // console.log(`cuisineKorean: ${cuisineKorean}`)
    // console.log(`cuisineLatinAmerican: ${cuisineLatinAmerican}`)
    // console.log(`cuisineMediterranean: ${cuisineMediterranean}`)
    // console.log(`cuisineMexican: ${cuisineMexican}`)
    // console.log(`cuisineMiddleEastern: ${cuisineMiddleEastern}`)
    // console.log(`cuisineNordic: ${cuisineNordic}`)
    // console.log(`cuisineSouthern: ${cuisineSouthern}`)
    // console.log(`cuisineSpanish: ${cuisineSpanish}`)
    // console.log(`cuisineThai: ${cuisineThai}`)
    // console.log(`cuisineVietnamese: ${cuisineVietnamese}`)
 
    // Get cuisine values
    // ******************
    let Dairy = document.getElementById("Dairy").checked;
    let Egg = document.getElementById("Egg").checked;
    let Gluten = document.getElementById("Gluten").checked;
    let Grain = document.getElementById("Grain").checked;
    let Peanut = document.getElementById("Peanut").checked;
    let Seafood = document.getElementById("Seafood").checked;
    let Sesame = document.getElementById("Sesame").checked;
    let Shellfish = document.getElementById("Shellfish").checked;
    let Soy = document.getElementById("Soy").checked;
    let Sulfite = document.getElementById("Sulfite").checked;
    let Wheat = document.getElementById("Wheat").checked;
    let TreeNut = document.getElementById("TreeNut").checked;

    // Get type of meal
    // ******************
    let maincourse = document.getElementById("maincourse").checked;
    let sidedish = document.getElementById("sidedish").checked;
    let dessert = document.getElementById("dessert").checked;
    let appetizer = document.getElementById("appetizer").checked;
    let salad = document.getElementById("salad").checked;
    let bread = document.getElementById("bread").checked;
    let breakfast = document.getElementById("breakfast").checked;
    let soup = document.getElementById("soup").checked;
    let beverage = document.getElementById("beverage").checked;
    let sauce = document.getElementById("sauce").checked;
    let marinade = document.getElementById("marinade").checked;
    let fingerfood = document.getElementById("fingerfood").checked;
    let snack = document.getElementById("snack").checked;
    let drink = document.getElementById("drink").checked;

    // Get max carbs
    // *************
    let maxCarbs = document.getElementById("maxCarbs").checked;



}
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







