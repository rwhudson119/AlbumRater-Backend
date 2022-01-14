const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
	profileID: {
        type: String,
		required: true,
	},
	username: {
        type: String,
		required: true,
	},
	password: {
        type: String,
		required: true,
	},
	darkmode: {
        type: String,
        enum: ['yes','no'],
		default: 'no'
	}
})

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile