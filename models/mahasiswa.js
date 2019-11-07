const mongoose  = require("mongoose")
const Schema    = mongoose.Schema

let mhsSchema = new Schema ({
    nomor_induk : Number,
    nama        : String,
    email       : String,
    tlp         : Number,
    jurusan     : String,
    password    : String,
    hobi        : String,   
    created_at  : {
        type    : Date,
        default : Date.now()
    },
    update_at: {
        type    : Date,
        default : Date.now()
    },   
    delete_at   : {
        type    : Date,
        default : Date.now()
    }
})

let Mahasiswa = mongoose.model("Mahasiswa", mhsSchema)

module.exports = Mahasiswa