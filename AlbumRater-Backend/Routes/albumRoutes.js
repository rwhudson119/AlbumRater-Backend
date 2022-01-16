const express = require('express')

// add Comment router 
const albumRouter = express.Router()
const albumController = require('../Controllers/albumControllers')

//CREATE ----------------------------------------------------------

albumRouter.post('/add', albumController.addAlbum);

//READ ------------------------------------------------------------

albumRouter.get('/', albumController.getAllAlbums);

albumRouter.get('/:albumId', albumController.getOneAlbum);


//UPDATE ----------------------------------------------------------



//DELETE ----------------------------------------------------------



// export the router
module.exports = albumRouter
