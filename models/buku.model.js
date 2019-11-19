const mongoose = require("mongoose")
const Schema   = mongoose.Schema

let bukuSchema = new Schema({
    id_buku: Number,
    judul: String,
    penulis: String,
    thn_terbit: String,
    penerbit: String
})

let Book = mongoose.model("Book", bukuSchema)

module.exports = Book