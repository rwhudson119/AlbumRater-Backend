const mongoose = require("mongoose")

const albumSchema = new mongoose.Schema({

    albumID: {
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
    genre: {
        type: String,
	},
	release_date: {
        type: String,
	},
    cover_photo: {
        type: String,
	},
    originality: {
        type: Number,
	},
	flow: {
        type: Number,
	},
    lyrics: {
        type: Number,
	},
	how_captivating: {
        type: Number,
	},
    timelessness: {
        type: Number,
	},
	notes: {
        type: String,
	},
    rankID: {
        type: [String],
	},
	songs: {
        type: [String],
	}
})

const Album = mongoose.model("Album", albumSchema)

module.exports = Album 