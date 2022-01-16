const mongoose = require("mongoose")
// import Song model
const Song = mongoose.model("Song")


const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find()
        return res.send(songs)
    } catch (err) {
        res.status(400)
        return res.send("Database query failed")
    }
}
   // find one Song by their id
const getOneSong = async (req, res) => {
    try {
        const oneSong = await Song.findOne( {"songId": req.params.id})
        if (oneSong === null) { 
        // no Song found in database
        res.status(404)
        return res.send("Song not found")
        }
        return res.send(oneSong) // Song was found
    } 
    catch (err) { // error occurred
       res.status(400)
       return res.send("Database query failed")
    }
}
   
   //add Song to the database
   const addSong = (req, res) => {
       const title = req.body.title
       const artist = req.body.artist
       const score = req.body.score
       
   
       const newSong = new Song({
        title,
        artist,
        score,
       });
   
       newSong.save()
           .then(() => res.json('Song added!'))
           .catch (err => res.status(400).json(`Error: ${err}`));
   }
   

// exporting the functions
module.exports = {
    getAllSongs,
    getOneSong,
    addSong
}