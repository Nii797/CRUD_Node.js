const mongoose    = require("mongoose")
const Schema      = mongoose.Schema

let pegawaiSchema = new Schema({
    id_pegawai : Number,
    nama       : String,
    alamat     : String,
    bidang     : Number
})      

let Pegawai = mongoose.model("Pegawai", pegawaiSchema)

module.exports = Pegawai