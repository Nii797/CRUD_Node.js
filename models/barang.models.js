const mongoose = require("mongoose")
const Scheme   = mongoose.Schema

let barangSchema = new Scheme({
    id_barang   : Number,
    judul       : String,
    keterangan  : String,
    harga       : Number
})  

let Barang = mongoose.model("Barang", barangSchema)

module.exports = Barang