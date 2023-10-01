// Import express
const express = require('express')
const app = express()

// New imports:
// ************
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')

// Database URL and PORTs
const connectDB = require('./config/database')
// Get Home page routes
const mainRoutes = require('./routes/main')
// Get ToDo's page routes
const todoRoutes = require('./routes/todos')

// Get enviroment variables
require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

// Connect to the database
connectDB()

// Configure the Express settings
// ==============================
// Set the view engine to 'ejs'.
app.set('view engine', 'ejs')
// Serve static files from the 'public' directory.
app.use(express.static('public'))
// So server can read data from html elements:
app.use(express.urlencoded({ extended: true }))
// So sever can read JSON data.
app.use(express.json())



// New code
// *********
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())



// Listen to main routes
app.use('/', mainRoutes)
// Listen to ToDo's routes:
app.use('/todos', todoRoutes)

// Start the Express application, listening on the specified port.
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    