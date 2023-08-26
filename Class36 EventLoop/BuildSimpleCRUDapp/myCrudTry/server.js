// ***********
// ** Imports **
// ***********
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

console.log('server.js starting...')

// ******************************
// ** Connect to MongoDB Atlas **
// ******************************

// Connection information:
// =======================
let connectionString = 'mongodb+srv://yoda:oNEn6lWuO2ADugjM@cluster0.tbcbcmb.mongodb.net/?retryWrites=true&w=majority'
// Version using environment variables:
//  @see https://zellwk.com/blog/environment-variables/
//  require('./dotenv')
//  Replace process.env.DB_URL with your actual connection string
//  const connectionString = process.env.DB_URL

// Establishing Connection:
// =======================
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    // ========================
    // Database and table info:
    // ========================
    // Connection confirmation  message
    console.log('Connected to Database');
    // DB name
    const db = client.db('star-wars-quotes');
    // Table name (collection name)
    const quotesCollection = db.collection('quotes');

    // ============================================
    // Middleware (must come before CRUD Handlers)
    // ============================================
    // Set template engine EJS
    app.set('view engine', 'ejs')
    // Makes server able to Read JSON data
    app.use(bodyParser.json())
    // So express can read data from html elements
    app.use(bodyParser.urlencoded({ extended: true }))
    // Make public folder accessible to the public
    app.use(express.static('public'))

    // ========================
    // Routes
    // ========================
    
    // READ: Serve Index:
    // ==================
    app.get('/', (req, res) => {
      // Gets quotes from database
      db.collection('quotes').find().toArray()
        .then(results => {
          console.log(results)
          // Rendered page with EJS and database results
          res.render('index.ejs', { quotes: results })
          // Alternative: serve index.html
          // res.sendFile(__dirname + '/index.html')
          //  What you would use for a static site.
      })
        // Error handling
        .catch(error => console.error(error))
      })

    // CREATE: Update MongoDB:
    // =======================
    // When server receives POST request from form.
    app.post('/quotes', (req, res) => {
      // Insert record into database
      quotesCollection.insertOne(req.body)
        .then(result => {
          // Log what was inserted to server console
          console.log(result)
          // Browser expects something back so redirect back to home
          res.redirect('/')
        })
        // Error handling
        .catch(error => console.error(error))
    })
    
    // UPDATE: Update MongoDB record
    // =============================
        // A less complicated process can be done with Mongoose. 
        // Read tutorial here:
        // https://zellwk.com/blog/mongoose/
    // Responds to PUT request from public/main.js
    app.put('/quotes', (req, res) => {
      // Method included in MongoDB
      quotesCollection.findOneAndUpdate(
        // Query posts written by 'Yoda'
        { name: 'Yoda' },
        {
          // Update operator $set
          // Other possible are: $inc, $push
          $set: {
            name: req.body.name,
            quote: req.body.quote,
          },
        },
        {
          // Create quote if no 'Yoda' quote exists
          // upsert: insert if no documents can be updated
          upsert: true,
        })
      .then(result => {
        // Console log result in server
        console.log(result)
        // Respond with Success JSON Message to client
        res.json('Success')
       })
       // Error Handling
      .catch(error => console.error(error))
    })

    // DELETE: De-lay-te MongoDB record
    // ================================
    app.delete('/quotes', (req, res) => {
      quotesCollection
      .deleteOne({ name: req.body.name })
      //.deleteOne({ name: 'Darth Vader' }, options)
      .then(result => {
        if (result.deletedCount === 0) {
          return res.json('No quote to delete')
        }
        res.json(`Deleted Darth Vader's quote`)
      })
      .catch(error => console.error(error))
    })

    // ========================
    // Server Listen:
    // ========================
    // Port for the server to listen:
    app.listen(3000, function () {
      console.log('listening on 3000')
    })
    // Production version:
    // const isProduction = process.env.NODE_ENV === 'production'
    // const port = isProduction ? 7500 : 3000
    // app.listen(port, function () {
    //   console.log(`listening on ${port}`)
    // })
    
  })
  // Error handling
  .catch(error => console.error(error))

// *****************
// ** CRUD - READ **
// *****************

// How express handles get requests:
// app.get(endpoint, callback)
// ===
// app.get('/', function (req, res) { //behavior })

// Code 1:
// -------
//   app.get('/', function (req, res) {
//     res.send('Hello World')
//   })

// Code 2:
// -------
// app.get('/', (req, res) => {
// res.sendFile(__dirname + '/index.html')
// // Note: __dirname is the current directory you're in. Try logging it and see what you get!
// })

// *******************
// ** CRUD - CREATE **
// *******************

// Made using POST request:
//     Through a form element. Or
//     Through JavaScript

// Code 1, (Form element)
// ---------------------

// When server gets '/quotes' request execute this:
// app.post('/quotes', (req, res) => {
//   quotesCollection
//     .insertOne(req.body)
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.error(error))
// })

// Moved the integrated the code inside the MongoDB code.


// *******************
// ** CRUD - READ **
// *******************

// Getting quotes from Mongo DB

// app.get('/', (req, res) => {
//   db.collection('quotes')
//     .find()
//     .toArray()
//     .then(results => {
//       console.log(results)
//     })
//     .catch(error => console.error(error))
// })

// Now we add this inside our Mongo DB Connection

// Rendering the HTML file:
// To Add dynamic content we add a template engine: Embedded JavaScript (EJS)

// Tell Express that EJS is the template engine
// app.set('view engine', 'ejs')
// Add this file before any other app methods


// *******************
// ** CRUD - READ **
// *******************