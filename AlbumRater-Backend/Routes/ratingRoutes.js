const express = require('express')

// add Comment router 
const ratingRouter = express.Router()
const ratingController = require('../Controllers/ratingControllers')

//CREATE ----------------------------------------------------------

ratingRouter.post('/add', ratingController.addRating);

//READ ------------------------------------------------------------

ratingRouter.get('/', ratingController.getAllRatings);

ratingRouter.get('/date/:date', ratingController.getOneRatingFromDate);

ratingRouter.get('/:ratingId', ratingController.getOneRating);

ratingRouter.get('/profile/:profile', ratingController.getProfilesRatings);


//UPDATE ----------------------------------------------------------



//DELETE ----------------------------------------------------------



// export the router
module.exports = ratingRouter