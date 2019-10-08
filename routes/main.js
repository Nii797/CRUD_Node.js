const index = require("./index");
const dosens = require("./dosens")
const mahasiswas = require("./mahasiswas");

const routes = (app) => {
    app.use("/", index)
    app.use("/dosen", dosens)
    app.use("/mahasiswa", mahasiswas)
}

module.exports = routes