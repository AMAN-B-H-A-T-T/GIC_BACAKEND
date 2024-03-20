const mongoose = require('mongoose')

const RegionalAdmin = mongoose.model("RegionalAdmin",mongoose.Schema({
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true
    }
}))

module.exports = RegionalAdmin