// Imports
// *******
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

// Run Server
// **********
const server = http.createServer((req, res) => {

  // Functions:
  // **********
    // Render page:
      function renderPage(pageName, contentType){
        fs.readFile(pageName, function(err, data) {
          res.writeHead(200, {'Content-Type': contentType});
          res.write(data);
          res.end();
        })
      }
    // Page not found:
      function render404(){
        figlet('404!!', function(err, data) {
          if (err) {
              console.log('Something went wrong...');
              console.dir(err);
              return;
          }
          res.write(data);
          res.end();
        });
      }
    // Serve CSS:
      function serveCSS(){
        fs.readFile('css/style.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
    // Serve JS:
      function serveJs(){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
    // ServeAPI:
      function serveAPI(){
        if(params['student'] == 'leon'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "leon",
            status: "Boss Man",
            currentOccupation: "Baller"
          }
          res.end(JSON.stringify(objToJson));
        }
        else {
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "unknown",
            status: "unknown",
            currentOccupation: "unknown"
          }
          res.end(JSON.stringify(objToJson));
        }
      }
  
  // Variables
  // *********
    // Save requested url as variable:
      const page = url.parse(req.url).pathname;
        console.log(`The requested url is: "${page}"`);

    // Save any additional query parameters as a variable:
      // Parameters are when the url has info attached in the url after '?'. 
      // For example: /api?student=${userName}
      // Here student is the query parameter.
      const params = querystring.parse(url.parse(req.url).query);
        console.log(`The params are: `)
        console.log(params)

  // Page controller
  // ***************
    switch(page){
      
      // Page loading
      case '/css/style.css':
        serveCSS();
        break;

      case '/js/main.js':
        serveJs();
        break;

      // User requests
      case '/':
        renderPage('index.html', 'text/html');
        break;

      case '/otherpage':
        renderPage('otherpage.html', 'text/html');
        break;

      case '/otherotherpage':
        renderPage('otherotherpage.html', 'text/html');
        break;

      case '/api':
        serveAPI();
        break;

      // 404
      default:
        render404();
    }
})

// Port to listen for requests:
server.listen(8000);
