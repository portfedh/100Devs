
// Imports
const http = require('http')
const fs = require('fs')
// Create server with node
http.createServer((req, res) => {
  // Serve html file & set listen port
  fs.readFile('demofile.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(8000)
