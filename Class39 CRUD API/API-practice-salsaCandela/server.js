// *************
// ** Imports **
// *************
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

console.log('server.js starting...')

// Serve Public Folder
app.use(express.static(__dirname + '/public'));

// ******************************
// ** Connect to MongoDB Atlas **
// ******************************

// Connection information:
// =======================
let connectionString = 'mongodb+srv://osorio:sKAzbO35GYkeEsdk@cluster0.hogwabt.mongodb.net/?retryWrites=true&w=majority'
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
    // Connection confirmation  message:
    console.log('Connected to Database');
    // DB name:
    const db = client.db('SalsaCandela');
    // Table name (collection name):
    const quotesCollection = db.collection('Fiesta1');

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
    
    // Serve Index:
    // ==================
    app.get('/', (req, res) => {
      // Serve index.html
      res.sendFile(__dirname + '/index.html')
    })

    // WRITE: Add values to  MongoDB:
    // ==============================
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