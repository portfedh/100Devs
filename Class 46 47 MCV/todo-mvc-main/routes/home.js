// Import the Express.js framework
const express = require('express')

// Create new router object
const router = express.Router()

// Imports a module named homeController 
// From a file in the "../controllers/home" directory. 
const homeController = require('../controllers/home')

// When a GET request is made to the root URL '/'
// Execute the getIndex() function from the homeController module
router.get('/', homeController.getIndex) 

// Exports the router object 
module.exports = router