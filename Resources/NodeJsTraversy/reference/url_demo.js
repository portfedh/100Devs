const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// Get Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Get Host (root domain)
console.log(myUrl.host)

// Get Host name (does not include the port)
console.log(myUrl.hostname)

// Get path name
console.log(myUrl.pathname)

// Serialized query
console.log(myUrl.search)

// Params object
console.log(myUrl.searchParams)

// Add Params
console.log(myUrl.searchParams.append('abc','123'))
console.log(myUrl.searchParams)

// Loop through Params 
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
