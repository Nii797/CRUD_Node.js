const express       = require('express')
const router        = express.Router()
const barangmodel   = require("../models/barang.models")

router.post("/create", async (req, res) => {
    let { id_barang, judul, keterangan, harga } = req.body
    let insert_data = {
        id_barang, judul, keterangan, harga
    }

    let data = new barangmodel(insert_data)
    data.save()

    return res.send({
        status: "Success",
        data,
        message:"Barang berhasil dibuat"
    })
})

router.get('/getAll', async (req, res) => {
    let result  = await barangmodel.find({}).exec()
    
    return res.send({
        status: "Success",
        result,
        message: "Semua data barang"
    })
})  

router.get('/:id', async (req, res,) => {
    let { id } = req.params

    let data = await barangmodel.findOne({ _id: id  }).exec()
    console.log(data)
    return res.status(200).json({
        status: "Success",
        data,
        message: "Detail data barang"
    })
})

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let { id_barang, judul, keterangan, harga } = req.body
    let updated_data = {
        id_barang, judul, keterangan, harga
    }
    console.log(updated_data)
    try{
        let data = await barangmodel.findByIdAndUpdate(id, updated_data)

        return res.status(200).json({
            status: "Success",
            data,
            message: "Update sukses"
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
    let query = await barangmodel.findOneAndDelete({ _id: id }).exec()

    return res.status(200).json({
        status: "success",
        query,
        message: "Data berhasil dihapus"
    })
})

module.exports = router
