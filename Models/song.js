const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
	id: {
        type: String,
		required: true,
	},
	title: {
        type: String,
		required: true,
	},
	artist: {
        type: String,
		required: true,
	},
	score: {
        type: Number,
	},
	duration: {
        type: Number,
	},
	bpm: {                                 
        type: Number,
	},
	profile: {
		type: String,
	}
})

const Song = mongoose.model("Song", songSchema)

module.exports = Song