const mongoose = require("mongoose")
// import Rating model
const Rating = mongoose.model("Rating")


const getAllRatings = async (req, res) => {
    try {
    const ratings = await Rating.find()
    return res.send(ratings)
    } catch (err) {
    res.status(400)
    return res.send("Database query failed")
    }
   }
   // find one Rating by their id
   const getOneRating = async (req, res) => {
    try {
    const oneRating = await Rating.findOne( {"ratingId": req.params.id})
    if (oneRating === null) { 
       // no Rating found in database
       res.status(404)
       return res.send("Rating not found")
    }
       return res.send(oneRating) // Rating was found
    } 
    catch (err) { // error occurred
       res.status(400)
       return res.send("Database query failed")
    }
   }
   
   //add Rating to the database
   const addRating = (req, res) => {
       const date = req.body.date
       const total_score = req.body.total_score
       const notes = req.body.notes
       
   
       const newRating = new Rating({
        date,
        total_score,
        notes,
       });
   
       newRating.save()
           .then(() => res.json('Rating added!'))
           .catch (err => res.status(400).json(`Error: ${err}`));
   }