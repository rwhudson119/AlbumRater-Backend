const express = require('express')

// add Comment router 
const albumRouter = express.Router()
const albumController = require('../Controllers/albumControllers')

//CREATE ----------------------------------------------------------

albumRouter.post('/add', albumController.addAlbum);

//READ ------------------------------------------------------------

albumRouter.get('/', albumController.getAllAlbums);

albumRouter.get('/oneAlbum/:albumId', albumController.getOneAlbum);

albumRouter.get('/:profile', albumController.getProfilesAlbums);



//UPDATE ----------------------------------------------------------

albumRouter.post('/update/:albumId', albumController.updateAlbum);

//DELETE ----------------------------------------------------------



// export the router
module.exports = albumRouter
