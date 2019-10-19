const mongoose  = require("mongoose");
const Schema    = mongoose.Schema;

let matkulSchema =  new Schema({
    nomatkul:   Number,
    namamatkul: String,
    dosen:      String,
    semester:   String 
})

let Matkul  = mongoose.model("Matkul", matkulSchema);

module.exports  = Matkul