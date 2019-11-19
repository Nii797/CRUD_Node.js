const express   = require("express")
const router    = express.Router()
const bukumodel = require("../models/buku.model")

router.post("/create", async (req, res) => {
    let { id_buku, judul, penulis, thn_terbit, penerbit } = req.body
    let input_data = {
        id_buku, judul, penulis, thn_terbit, penerbit
    }

    let data = new bukumodel(input_data)
    data.save()

    return res.send({
        status: "Success",
        data,
        message: "Data buku berhasil dimasukan"
    })    
})

router.get("/getAll", async (req, res) => {
    let result = await bukumodel.find({}).exec()

    res.send({
        status: "Success",
        result,
        message: "Semua data berhasil tampil"
    })
})

router.get("/:id", async (req, res) => {
    let { id } = req.params

    let data = await bukumodel.findOne({ _id: id}).exec()

    return res.send({
        status: "Success",
        data,
        message: "Data detail sukses ditampilkan"
    })
})

router.put("/:id", async (req, res) => {
    let { id } = req.params
    let { id_buku, judul, penulis, thn_terbit, penerbit } = req.body

    let update_data = {
        id_buku, judul, penulis, thn_terbit, penerbit
    }

    try{
        let data = await bukumodel.findByIdAndUpdate(id, update_data)

        return res.status(200).json({
            status: "Success",
            data,
            message: "Data berhasil di update"
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
    let query  = await bukumodel.findByIdAndDelete({ _id: id }).exec()
    
    return res.status(200).json({
        status: "Success",
        query, 
        message: "Data berhasil dihapus"
    })
})

module.exports = router