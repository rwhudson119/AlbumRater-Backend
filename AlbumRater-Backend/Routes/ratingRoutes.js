const express = require('express')

// add Comment router 
const ratingRouter = express.Router()
const ratingController = require('../Controllers/ratingControllers')

//CREATE ----------------------------------------------------------

ratingRouter.post('/add', ratingController.addRating);

//READ ------------------------------------------------------------

ratingRouter.get('/', ratingController.getAllRatings);

ratingRouter.get('/:ratingId', ratingController.getOneRating);


//UPDATE ----------------------------------------------------------



//DELETE ----------------------------------------------------------



// export the router
module.exports = ratingRouter