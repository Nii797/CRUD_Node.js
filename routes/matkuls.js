const express  = require('express')
const router   = express.Router();
const { buat, semua, detail, ubah, hapus } = require("../actions/Matkul/matkuls")  
const List     = require("../actions/Dosen/list-dosen.action")

router.post("/", async (req, res) => {
    try {
        let data = await buat(req)

        return res.status(200).json({
            status: "sukses",
            data,
            message: "Data matkul berhasil diinput"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.get("/", async (req, res, next) => {
    try {
        let params  = {}
        let search  = {}

        let limit   = parseInt(req.query.limit)
        if(!limit){
            params.limit = 30
        } else {
            this.params.limit = limit
        }

        let page = parseInt(req.body.limit)
        if(!page){
            params.page = 1
        } else {
            params.page = page
        }

        let data = await new List(search, params).exec()
        let meta = {
            total: data.total,
            limit: data.limit,
            page: data.page,
            pages: data.pages
        }

        data = data.data

        return res.status(200).json({
            status: "Sukses",
            message: "Data semua terambil",
            data,
            meta
        })

    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.get("/", async (req, res) => {
    try {
        let data = await semua()

        return res.send({
            status: "Sukses",
            data,
            message: "Tampilan semua data matkul"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.get("/:id", async (req, res) => {
    try {
        let { id }  = req.params
        let data    = await detail(id)

        return res.status(200).json({
            status: "Success",
            data,
            message: "Data Matkul berhasil tampil"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.put("/:id", async (req, res) => {
    let { id } = req.params
    let updated_data = {
        nomatkul: req.body.nomatkul,
        namamatkul: req.body.namamatkul,
        dosen: req.body.dosen,
        semester: req.body.semester
    }

    try {
        let data = await ubah(id, updated_data)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Update Matkul sukses"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error update",
            message: err.message
        })
    }
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try{
        let data = await hapus(id)

        res.status(200).json({
            status: "Sukses",
            data,
            message: "Sukses menghapus"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

module.exports = router