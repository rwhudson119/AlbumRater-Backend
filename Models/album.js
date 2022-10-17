const mongoose = require("mongoose")

const albumSchema = new mongoose.Schema({

    title: {
        type: String,
		required: true,
	},
	profile: {
        type: String,
		required: true,
	},
	artist: {
        type: String,
		required: true,
	},
	country: {
        type: String,
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
	artwork: {
        type: Number,
	},
	expectation: {
        type: Number,
	},
	in_queue: {
        type: String,
        enum: ['yes','no'],
		required: true,
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
	delivery: {
        type: Number,
	},
	music: {
        type: Number,
	},
	notes: {
        type: String,
	},
    ratings: {
        type: [String],
	},
	songs: {
        type: [String],
	}
});

const Album = mongoose.model('Album', albumSchema)

module.exports = Album 