const mongoose = require('mongoose')

const SuperAdmin = mongoose.model("SuperAdmin",mongoose.Schema({
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true
    }
}))

module.exports = SuperAdmin