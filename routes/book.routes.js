const express = require('express')
const router = express.Router()
const { create, getAll } = require("../actions/book.action")
const { isString } = require("lodash")

router.post("/", (req, res) => {
    let data = create(req)

    if(isString(data) === true){
        return res.send({
            status: "Error",
            message: err.message
        })
    }

    return res.status(200).json({
        status: "Success",
        data,
        message: "Book created successfully"
    })
})

router.get("/", async (req, res) => {
    let data = await getAll()

    return res.send({
        status: "Success",
        data,
        message: "Get all book data"
    })
})

module.exports = router