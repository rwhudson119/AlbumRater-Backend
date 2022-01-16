const mongoose = require("mongoose")
// import Profile model
const Profile = mongoose.model("Profile")


const getAllProfiles = async (req, res) => {
    try {
    const profiles = await Profile.find()
    return res.send(profiles)
    } catch (err) {
    res.status(400)
    return res.send("Database query failed")
    }
   }
   // find one Profile by their id
   const getOneProfile = async (req, res) => {
    try {
    const oneProfile = await Profile.findOne( {"profileId": req.params.id})
    if (oneProfile === null) { 
       // no Profile found in database
       res.status(404)
       return res.send("Profile not found")
    }
       return res.send(oneProfile) // Profile was found
    } 
    catch (err) { // error occurred
       res.status(400)
       return res.send("Database query failed")
    }
   }
   
   //add Profile to the database
   const addProfile = (req, res) => {
       const username = req.body.username
       const password = req.body.password
       const darkmode = req.body.darkmode
       
   
       const newProfile = new Profile({
        username,
        password,
        darkmode,
       });
   
       newProfile.save()
           .then(() => res.json('Profile added!'))
           .catch (err => res.status(400).json(`Error: ${err}`));
   }