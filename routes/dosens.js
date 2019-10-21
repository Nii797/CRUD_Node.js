const express = require('express');
const router  = express.Router();
const { buat, semua, detail, ubah, hapus } = require("../actions/Dosen/dosens");   
const searchDosen = require("../actions/Dosen/search.action") 

router.get("/search", async (req, res, next) => {
    let { nik, nama, email, tlp, matkul } = req.query
    console.log(nik)
    try {
        let params = {}

        if (nik) {
            params.nik = nik
        }

        if (nama) {
            params.nama = nama
        }

        if (email) {
            params.email = email
        }

        if (tlp) {
            params.tlp = tlp
        }

        if (matkul) {
            params.matkul = matkul
        }

        let data = await new searchDosen(params).all()
        console.log(params)
        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Pencarian Sukses"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Pencarian Error",
            message: err.message
        })
    }
});

router.post("/", async (req, res) => {
    try {
        let data = await buat(req)

        return res.status(200).json({ // yang dimaksud 200 json adalah respon sukses
            status: "Sukses",
            data,
            message: "Data dosen berhasil dibuat !"   
        })
    } catch(err){
        return res.status(400).json({ // yang dimaksud 400 json adalah respon error
            status: "Error",
            message: err.message
        })
    }
});

router.get("/", async (req, res) => {
    try{
        let data = await semua()

        return res.send({
            status: "Sukses",
            data,
            message: "Semua data tampil !"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }    
});

router.get("/", async (req, res, next) => {
    try { 
        let params = {}
        let search = {}

        let limit = parseInt(req.query.limit)
        if(!limit) {
            params.limit = 30
        } else {
            params.limit = limit
        }

        let page = parseInt(req.query.page)
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
            message: "Semua data",
            data,
            meta
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
        let { id } = req.params
        let data = await detail(id)

        return res.status(200).json({
            status: "sukses",
            data,
            message: "Detail data dosen !"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.put("/:id", async (req,res) => {
    let { id } = req.params
    let update_data = {
        nik: req.body.nik,
        nama: req.body.nama, 
        email: req.body.email,
        tlp: req.body.tlp,
        matkul: req.body.matkul
    }

    try {
        let data = await ubah(id, update_data)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data Dosen berhasil diubah !"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await hapus(id)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data Dosen berhasil hapus"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

module.exports = router











