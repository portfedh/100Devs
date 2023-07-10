
// Listen for click
// ****************
document.querySelector('#submit-button').addEventListener('click', readForm)

// Calculate yesterdays date
// *************************
let today = new Date();
let yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
var yyyy = yesterday.getFullYear();
var mm = String(yesterday.getMonth() + 1).padStart(2, '0');
var dd = String(yesterday.getDate()).padStart(2, '0');
var formattedDate = yyyy + '-' + mm + '-' + dd;
console.log(formattedDate);

// Check local storage for previous searches
// *****************************************
localStorage.clear()
let lastSearch = localStorage.getItem('searchValue')
console.log("Last Saved Value: " + lastSearch);

// Change the heading if there were previous searches
// **************************************************
if(lastSearch === null) {
    document.querySelector('#news-heading').innerText = 'Current Events:';
} else {
    document.querySelector('#news-heading').innerText = 'Current events for:'+ lastSearch;
}

// Read the form and call the API
// ******************************

function readForm(){

  // Access the search value
  // ************************
  let searchObj = document.getElementById("searchSubject");
  let searchVal = searchObj.value;
  // Remove white spaces with regex
  let search = searchVal.replace(/\s/g, '');


  // Save search value to local storage
  // **********************************
  localStorage.setItem('searchValue', search)
  console.log("Searching for: " + search);
  document.getElementById("news-heading").textContent = `Current events for: ${searchVal}`;

  // Create the url to call the api
  // ******************************
  let apiUrl = 'https://newsapi.org/v2/everything?' +
            'q=' +
            search +
            '&' +
            'from=' +
            formattedDate +
            '&' +
            'sortBy=popularity&' +
            'apiKey=6320f961210745a9bf655842d076b524';
  console.log("URL is: " + apiUrl);

  // Call the API
  // ************
  var req = new Request(apiUrl);
  fetch(req)
      // Parse response as JSON
      .then(res => res.json())
      // Manipulate data
      .then(data => {
        // Display all results in console
        console.log(data)

        // Define number of results to display in page
        let maxResults = 10
        let results = Number(data.totalResults)
        console.log(`Results found: ${results}`)
        if(results >= maxResults){
            resultsLength = maxResults
        } else {
            resultsLength = results
        }
        
        // Get a reference to the container to add results
        const container = document.getElementById("container");
        // Delete any unordered lists
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
        for(i=0; i < resultsLength; i++){
            let articleTitle = data.articles[i].title;
            let articleUrl = data.articles[i].url;
            let articleSource = data.articles[i].source.name

            // Create a new element
            const liElement = document.createElement("li");
            // Create a new anchor element
            const anchorElement = document.createElement("a");
            // Set the URL as the href attribute of the anchor element
            anchorElement.href = articleUrl;
            // Set the text content for the anchor element
            anchorElement.textContent = articleTitle + ", " + articleSource;
            // Append the anchor element to the list item
            liElement.appendChild(anchorElement);
            // Append the list item to the unordered list
            ulElement.appendChild(liElement);
        }

        // For Debugging
        console.log(`Article Title: ${data.articles[0].title}`)
        console.log(`Article Description: ${data.articles[0].description}`)
        console.log(`Article Author: ${data.articles[0].author}`)
        console.log(`Article Content: ${data.articles[0].content}`)
        console.log(`Article Url: ${data.articles[0].url}`)
        console.log(`Article Image: ${data.articles[0].urlToImage}`)
        console.log(`Article Published: ${data.articles[0].publishedAt}`)
        console.log(`Article Source: ${data.articles[0].source.name}`)

      })
      .catch(err => {
        console.log(`error ${err}`)
      })

}








