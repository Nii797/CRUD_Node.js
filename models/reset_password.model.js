const mongoose  = require("mongoose")
const Schema    = mongoose.Schema

let resetPasswordSchema = new Schema({
    email: String,
    token: String,
    created_at: {
        type: Date,
        default: Date.now()
    }
})

let resetPassword = mongoose.model("resetPassword", resetPasswordSchema)

module.exports = resetPassword