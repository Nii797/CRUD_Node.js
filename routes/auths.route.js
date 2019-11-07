const express   = require('express')
const router    = express.Router()
const Register  = require("../actions/Dosen/7.register.action")
const Login     = require("../actions/Dosen/8.login.action")

router.post("/register-dosen", async (req, res, next) => {
    try{
        let data = await new Register(req).exec()

        return res.send({
            status: "Sukses",
            data,
            message: "Register Berhasil"
        })
    } catch(err){
        return res.send({
            status: "Error",
            message: err.message
        })
    }
})

router.post("/login", async (req, res) => {
    try{
        let data = await new Login(req).exec()

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Login Sukses"
        })
    } catch(err){
        res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

module.exports = router