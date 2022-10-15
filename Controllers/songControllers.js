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


const getProfilesSongs = async (req, res) => {
    try {
        const songs = await Song.find( {"profile": req.params.profile } )
        console.log("Getting all Songs");
        return res.send(songs)
    } catch (err) {
        res.status(404)
        console.log("failed " + req.params.profile);
        return res.send("Database query failed")
    }
}



   // find one Song by their id
const getOneSong = async (req, res) => {
    try {
        const oneSong = await Song.findOne( {"id": req.params.songId})
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

const deleteAllSongs = async (req, res) => {
    try {
        const oneSong = await Song.deleteMany({})
        return res.send("Songs Deleted") // Songs deleted
    } 
    catch (err) { // error occurred
       res.status(400)
       return res.send("Database query failed")
    }
}

const updateSong = async (req, res) => {
    try {
       const update = {
            score: req.body.score
       }
   await Song.findByIdAndUpdate(req.params.songId, update)
   return res.send("Updated Song") // Song was found and updated 
   } 
   catch (err) { // error occurred
       console.log(err)
       res.status(400)
       return res.send("Database query failed")
   }
}
   
   //add Song to the database
   const addSong = (req, res) => {
       const id = req.body.id
       const title = req.body.title
       const artist = req.body.artist
       const score = req.body.score
       const profile = req.body.profile
       const duration = req.body.duration
       const bpm = req.body.bpm

       
   
       const newSong = new Song({
        id,
        title,
        artist,
        score,
        profile,
        duration,
        bpm,
       });
   
       newSong.save()
           .then(() => res.json(id))
           .catch (err => res.status(400).json(`Error: ${err}`));
   }
   
// exporting the functions
module.exports = {
    getAllSongs,
    getOneSong,
    addSong,
    deleteAllSongs,
    updateSong,
    getProfilesSongs
}