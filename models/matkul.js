const mongoose    = require('mongoose')
const Schema      = mongoose.Schema
 
let MatkulSchema  = new Schema ({
    kode_matkul   : Number,
    nama_matkul   : String,
    sks           : String,
    pengajar      : String,
    created_at    : {
        type      : Date,
        default   : Date.now()
    },
    update_at     : {
        type      : Date,
        default   : Date.now()
    },
    delete_at     : {
        type      : Date,
        default   : Date.now()
    }
})    

let Matkul = mongoose.model("Matkul", MatkulSchema)

module.exports = Matkul