// ***********
// ** SETUP **
// ***********
console.log('May Node be with you')

// Imports
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

// Set template engine EJS
app.set('view engine', 'ejs')

// Make public folder accessible to the public
app.use(express.static('public'))

// Make it able to Read JSON
app.use(bodyParser.json())

// Port for the server to listen
app.listen(3000, function () {console.log('listening on 3000')})

// Handle html form elements
app.use(bodyParser.urlencoded({ extended: true }))
// Express cant read data from html forms
// We install and use add bodyParser for that
// Must come before the CRUD handlers

// Connect to MongoDB Atlas

// Connection information
let connectionString = 'mongodb+srv://yoda:oNEn6lWuO2ADugjM@cluster0.tbcbcmb.mongodb.net/?retryWrites=true&w=majority'

// Connection code:
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {

    // Connection message
    console.log('Connected to Database');

    // DB name
    const db = client.db('star-wars-quotes');

    // Table (collection)
    const quotesCollection = db.collection('quotes');  
    
    // Serve Index
    app.get('/', (req, res) => {
      // Gets quotes from database
      db.collection('quotes')
      .find()
      .toArray()
      .then(results => {
        console.log(results)
        // Rendered page with EJS and database results
        res.render('index.ejs', { quotes: results })
      })
      .catch(error => console.error(error))

      // Serve index.html
      // res.sendFile(__dirname + '/index.html')
      // What you would use for a static site.
      })

    // Sending form info to mongoDB
    app.post('/quotes', (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then(result => {
          console.log(result)
          // Browser expects something back so we redirect back to home
          res.redirect('/')
        })

        // Error handling in MongoDB
        .catch(error => console.error(error))
    })
    
    // Updates the App
    app.put('/quotes', (req, res) => {
      quotesCollection.findOneAndUpdate(
        { name: 'Yoda' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote,
          },
        },
        {
          upsert: true,
        }
      )
      .then(result => {
        console.log(result)
        res.json('Success')
       })
      .catch(error => console.error(error))
    })

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