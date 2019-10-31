// nik, nama, email, tlp, matkul
const mongoose  = require("mongoose")
const Schema    = mongoose.Schema

let dosenSchema = new Schema ({
    nik         : Number,
    nama        : String,
    email       : String,
    tlp         : Number,
    matkul      : String,
    password    : String,
    created_at  : {
        type    : Date,
        default : Date.now()
    },
    update_at: {
        type    : Date,
        default : Date.now()
    }    
})

let Dosen = mongoose.model("Dosen", dosenSchema)

module.exports = Dosen