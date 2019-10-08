// npm: req.body.npm,
// nama: req.body.nama,
// email: req.body.email,
// tlp: req.body.tlp,
// jurusan: req.body.jurusan

const mongoose = require("mongoose");
const Schema = mongoose.Schema

let mahasiswaSchema = new Schema({
    npm: String,
    nama: String,
    email: String,
    tlp: Number,
    jurusan: String,     
})

let Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema) 

module.exports = Mahasiswa