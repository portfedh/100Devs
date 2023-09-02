const path = require('path');

// Base filename
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)

// Concatenate path
// Goal:  ../test/hello.html
console.log(path.join(__dirname, 'test', 'helllo.html'))