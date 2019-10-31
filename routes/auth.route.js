const express   = require('express')
const router    = express.Router()
const Register  = require("../actions/users/register.action")
const Login     = require("../actions/users/login.action")

// ================================ Register akun User =================================
router.post("/register", async (req, res) => {
    try {
        let data = await new Register(req).exec()

        return res.send({
            status: "Sukses",
            data,
            message: "Register Successfully"
        })
    } catch(err){
        return res.send({
            status: "Error",
            message: err.message
        })
    }
})
// =====================================================================================


// ================================ Login akun User ====================================
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
// ======================================================================================

module.exports = router