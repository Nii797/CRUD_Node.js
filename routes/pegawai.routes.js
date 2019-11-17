const express      = require('express')
const router       = express.Router()
const pegawaiModel = require("../models/pegawai.models")

router.get("/create", async (req, res) => {
    let { id_pegawai, nama, alamat, bidang } = req.body
    let insert_data = {
        id_pegawai, nama, alamat, bidang
    }

    let data = new pegawaiModel(insert_data)
    data.save()

    return res.send({
        status: "Success",
        data,
        message: "Data berhasil dibuat"
    })
})

