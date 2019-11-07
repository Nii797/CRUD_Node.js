const mongoose  = require("mongoose")
const Schema    = mongoose.Schema

let TUSchema    = new Schema ({
    nomor_induk : Number,
    nama        : String,
    jurusan     : String,
    keterangan  : String,
    created_at  : {
        type    : Date,
        default : Date.now()
    },
    update_at   : {
        type    : Date,
        default : Date.now()        
    },
    delete_at   : {
        type    : Date,
        default : Date.now()
    }
})

let TU  = mongoose.model("TU", TUSchema)

module.exports = TU