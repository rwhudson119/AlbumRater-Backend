const express = require('express')

// add Comment router 
const profileRouter = express.Router()
const profileController = require('../Controllers/profileControllers')

//CREATE ----------------------------------------------------------

profileRouter.post('/add', profileController.addProfile);

//READ ------------------------------------------------------------

profileRouter.get('/', profileController.getAllProfiles);

profileRouter.get('/:profileId', profileController.getOneProfile);


//UPDATE ----------------------------------------------------------



//DELETE ----------------------------------------------------------



// export the router
module.exports = profileRouter