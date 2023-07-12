
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
  let cuisineAfrican = document.getElementById("african").checked;
  let cuisineAsian = document.getElementById("asian").checked;
  let cuisineAmerican = document.getElementById("american").checked;
  let cuisineBritish = document.getElementById("british").checked;
  let cuisineCajun = document.getElementById("cajun").checked;
  let cuisineCaribean = document.getElementById("caribbean").checked;
  let cuisineChinese = document.getElementById("chinese").checked;
  let cuisineEasternEuropean = document.getElementById("easternEuropean").checked;
  let cuisineEuropean = document.getElementById("european").checked;
  let cuisineFrench= document.getElementById("french").checked;
  let cuisineGerman = document.getElementById("German").checked;
  let cuisineIndian = document.getElementById("Indian").checked;
  let cuisineIrish = document.getElementById("Irish").checked;
  let cuisineItalian = document.getElementById("Italian").checked;
  let cuisineJapanese = document.getElementById("Japanese").checked;
  let cuisineJewish = document.getElementById("Jewish").checked;
  let cuisineKorean = document.getElementById("Korean").checked;
  let cuisineLatinAmerican = document.getElementById("LatinAmerican").checked;
  let cuisineMediterranean = document.getElementById("Mediterranean").checked;
  let cuisineMexican = document.getElementById("Mexican").checked;
  let cuisineMiddleEastern = document.getElementById("MiddleEastern").checked;
  let cuisineNordic = document.getElementById("Nordic").checked;
  let cuisineSouthern = document.getElementById("Southern").checked;
  let cuisineSpanish = document.getElementById("Spanish").checked;
  let cuisineThai = document.getElementById("Thai").checked;
  let cuisineVietnamese = document.getElementById("Vietnamese").checked;

  // Cuisine check
  console.log(`cuisineAfrican: ${cuisineAfrican}`)
  console.log(`cuisineAsian: ${cuisineAsian}`)
  console.log(`cuisineAmerican: ${cuisineAmerican}`)
  console.log(`cuisineBritish: ${cuisineBritish}`)
  console.log(`cuisineCajun: ${cuisineCajun}`)
  console.log(`cuisineCaribean: ${cuisineCaribean}`)
  console.log(`cuisineChinese: ${cuisineChinese}`)
  console.log(`cuisineEasternEuropean: ${cuisineEasternEuropean}`)
  console.log(`cuisineEuropean: ${cuisineEuropean}`)
  console.log(`cuisineFrench: ${cuisineFrench}`)
  console.log(`cuisineGerman: ${cuisineGerman}`)
  console.log(`cuisineIndian: ${cuisineIndian}`)
  console.log(`cuisineIrish: ${cuisineIrish}`)
  console.log(`cuisineItalian: ${cuisineItalian}`)
  console.log(`cuisineJapanese: ${cuisineJapanese}`)
  console.log(`cuisineJewish: ${cuisineJewish}`)
  console.log(`cuisineKorean: ${cuisineKorean}`)
  console.log(`cuisineLatinAmerican: ${cuisineLatinAmerican}`)
  console.log(`cuisineMediterranean: ${cuisineMediterranean}`)
  console.log(`cuisineMexican: ${cuisineMexican}`)
  console.log(`cuisineMiddleEastern: ${cuisineMiddleEastern}`)
  console.log(`cuisineNordic: ${cuisineNordic}`)
  console.log(`cuisineSouthern: ${cuisineSouthern}`)
  console.log(`cuisineSpanish: ${cuisineSpanish}`)
  console.log(`cuisineThai: ${cuisineThai}`)
  console.log(`cuisineVietnamese: ${cuisineVietnamese}`)
 
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







