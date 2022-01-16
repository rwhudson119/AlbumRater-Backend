const express = require('express')

// add Comment router 
const songRouter = express.Router()
const songController = require('../Controllers/songControllers')

//CREATE ----------------------------------------------------------

songRouter.post('/add', songController.addSong);

//READ ------------------------------------------------------------

songRouter.get('/', songController.getAllSongs);

songRouter.get('/:songId', songController.getOneSong);


//UPDATE ----------------------------------------------------------



//DELETE ----------------------------------------------------------



// export the router
module.exports = songRouter