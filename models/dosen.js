const mongoose          = require("mongoose");
const Schema            = mongoose.Schema;
const mongoosePaginate  = require("mongoose-paginate")

let dosenSchema = new Schema({
    nik:    Number,
    nama:   String,
    email:  String,
    tlp:    Number,
    matkul: String
});

dosenSchema.plugin(mongoosePaginate)
dosenSchema.virtual('user', {
    localField: 'author',
    foreignField: '_id',
    justOnce: false
})

let Dosen = mongoose.model("Dosen", dosenSchema);

module.exports = Dosen