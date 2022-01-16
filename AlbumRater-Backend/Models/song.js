const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
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
	}
})

const Song = mongoose.model("Song", songSchema)

module.exports = Song