const mongoose = require("mongoose")
// import Album model
const Album = mongoose.model("Album")


const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find()
        return res.send(albums)
    } catch (err) {
        res.status(400)
        return res.send("Database query failed")
    }
}
   // find one Album by their id
const getOneAlbum = async (req, res) => {
    try {
        const oneAlbum = await Album.findOne( {"albumId": req.params.id})
        if (oneAlbum === null) { 
            // no Album found in database
            res.status(404)
            return res.send("Album not found")
        }
        return res.send(oneAlbum) // Album was found
    } 
    catch (err) { // error occurred
       res.status(400)
       return res.send("Database query failed")
    }
}
   
//add Album to the database
const addAlbum = (req, res) => {
    const title = req.body.title
    const artist = req.body.artist
    const genre = req.body.genre
    const release_date = req.body.release_date
    const cover_photo = req.body.cover_photo
    const originality = req.body.originality
    const flow = req.body.flow
    const lyrics = req.body.lyrics
    const how_captivating = req.body.how_captivating
    const timelessness = req.body.timelessness
    const notes = req.body.notes
    const ratings = req.body.ratings
    const songs = req.body.songs

    const newAlbum = new Album({
    title,
    artist,
    genre,
    release_date,
    cover_photo,
    originality,
    flow,
    lyrics,
    how_captivating,
    timelessness,
    notes,
    ratings,
    songs,
    });
   
    newAlbum.save()
    .then(() => res.json('Album added!'))
    .catch (err => res.status(400).json(`Error: ${err}`));
}

module.exports = {
    getAllRatings,
    getOneRating,
    addRating
}