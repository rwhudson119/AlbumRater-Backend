const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
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
	}

})

const Rating = mongoose.model("Rating", ratingSchema)

module.exports = Rating