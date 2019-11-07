const express   = require('express')
const router    = express.Router()
const Create    = require("../actions/Matkul/create.action")
const List      = require("../actions/Matkul/list.action")

router.post("/", async (req, res, next) =>
    await new Create().exec(req, res, next))

router.get("/", async (req, res, next) => 
    await new List().exec(req, res, next))
    
module.exports = router    