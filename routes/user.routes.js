const express = require('express')
const router = express.Router()
const { create, getAll, getDetail, update, destroy } = require("../actions/user.actions")

router.post("/", async (req, res) => {
    try {
        let data = await create(req)

        return res.status(200).json({
            status: "success",
            data,
            message: "User created succesfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})


router.get("/", async(req, res) =>{
    try {
        let data = await getAll()

        return res.send({
            status: "success",
            data,
            message: "Get All User Data"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/:id", async (req, res) => {
    try {
        let { id } = req.params
        let data = await getDetail(id)

        return res.status(200).json({
            status: "Success",
            data,
            message: "Get User Detail Succesfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

router.put("/:id", async (req, res) => {
    let { id } = req.params
    let { name, email, phone, fresh } = req.body
    let updated_data = {
        name,
        email,
        phone,
        fresh
    }
    try {
        let data = await update(id, updated_data)

        return res.status(200).json({
            status: "Success",
            data,
            message: "User data Updated Successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await destroy(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "User data deleted successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router