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
	}
})

const Song = mongoose.model("Song", songSchema)

module.exports = Song