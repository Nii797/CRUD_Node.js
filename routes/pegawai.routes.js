const express      = require('express')
const router       = express.Router()
const pegawaiModel = require("../models/pegawai.models")

router.post("/create", async (req, res) => {
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

router.get("/getAll", async (req, res) => {
    let result = await pegawaiModel.find({}).exec()

    return res.send({
        status : "success",
        result,
        message: "Semua data pegawai"
    })
})

router.get("/:id", async (req, res) => {
    let { id } = req.params
    let query  = await pegawaiModel.findOne({ _id : id }).exec()
    
    return res.send({
        status: "Success",
        query,
        message: "Data detal pegawai"
    })
})

router.put("/:id", async (req, res) => {
    let { id } = req.params
    let { id_pegawai, nama, alamat, bidang } = req.body
    let update_data = {
        id_pegawai, nama, alamat, bidang
    }

    try{
        let data = await pegawaiModel.findOneAndUpdate(id, update_data)

        return res.status(200).json({
            status: "Success",
            data,
            message: "Data pegawai sukses di update"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

router.delete("/:id", async (req, res) => {
    let { id } = req.params
    let query  = await pegawaiModel.findOneAndDelete({ _id : id }).exec()
    
    return res.status(200).json({
        status: "Success",
        query,
        message: "Data sukses dihapus"
    })
})

module.exports = router