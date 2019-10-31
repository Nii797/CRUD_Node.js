const express       = require('express')
const router        = express.Router()
const { check }     = require("express-validator")
const jwt           = require("jsonwebtoken")
const UserList      = require("../actions/users/list.action")
const UserCreate    = require("../actions/users/create.action")
const UserShow      = require("../actions/users/show.action")
const UserMyprofile = require("../actions/users/my-profile.action")
const UserSearch    = require("../actions/users/search.action")
const UserUpdate    = require("../actions/users/update.action")
const UserDelete    = require("../actions/users/delete.action")
const UserDeleteAll = require("../actions/users/deleteAll.action")

// =========================== untuk menginput data ============================================
router.post("/", [
    check('name').not().isEmpty(),
    check('email').not().isEmpty(),
    check('password').not().isEmpty().isLength({ min: 8})
], async (req, res, next) => await new UserCreate().exec(req, res, next))
// =============================================================================================


// =========================== untuk melihat semua data yang sudah diinput =====================
router.get("/list", async(req, res, next) => 
    await new UserList().exec(req, res, next))
// =============================================================================================


// // =========================== masuk status profile yang masuk cara 1 ======================== 
// router.get("/my-profile", async(req, res) => {
//     try{
//         let user_token  = req.header("Authorization")
//         let user_data   = await jwt.verify(user_token, process.env.JWT_SECRET)
//         console.log(`User data from token ${JSON.stringify(user_data)}`)

//         let data = await new UserMyprofile(user_data.user_id)

//         return res.status(200).json({
//             status: "Sukses",
//             data,
//             message: "User Login Data"
//         })
//     } catch(err){
//         return res.status(400).json({
//             status: "Error",
//             message: err.message
//         })
//     }
// })
// // ==========================================================================================


// ============================ masuk status profile cara 2 ====================================
router.get("/my-profile", async(req, res, next) => 
    await new UserMyprofile().exec(req, res, next))
// =============================================================================================

// ============================ bisa melihat salah satu ========================================
router.get("/:id", async(req, res, next) =>
    await new UserShow().exec(req, res, next))  
// =============================================================================================


// ============================ pencarian data =================================================
router.get("/", async(req, res, next) => 
    await new UserSearch().exec(req, res, next))


// ============================== Update Data ==================================================
router.put("/:id", async (req, res, next) => 
    await new UserUpdate().exec(req, res, next))    


// ================================ Hapus Data =================================================
router.delete("/:id", async (req, res, next) =>
    await new UserDelete().exec(req, res, next))   
// =============================================================================================


router.delete("/", async (req, res, next) =>
    await new UserDeleteAll().exec(req, res, next))


module.exports = router
