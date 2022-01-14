const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
	ratingID: {
        type: String,
		required: true,
	},
	date: {
        type: String,
		required: true,
	},
	total_score: {
        type: Number,
		required: true,
	},
	notes: {
        type: String,
		required: true,
	}

})

const Rating = mongoose.model("Rating", ratingSchema)

module.exports = Rating