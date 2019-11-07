const express   = require('express')
const router    = express.Router()
const Create    = require("../actions/TU/create.spp.action")
const List      = require("../actions/TU/list.action")
const Show      = require("../actions/TU/show.action")
const Update    = require("../actions/TU/update.action")
const Search    = require("../actions/TU/search.action")
const AllDelete = require("../actions/TU/deleteall.action")
const Delete    = require("../actions/TU/delete.action")

router.post("/", async (req, res, next) => 
    await new Create().exec(req, res, next))

router.get("/list", async (req, res, next) =>
    await new List().exec(req, res, next))

router.get("/:id", async (req, res, next) =>
    await new Show().exec(req, res, next))

router.put("/:id", async (req, res, next) =>    
    await new Update().exec(req, res, next))    

router.get("/", async (req, res, next) =>
    await new Search().exec(req, res, next))    
    
router.delete("/deleteall", async (req, res, next) =>
    await new AllDelete().exec(req, res, next))    

router.delete("/:id", async (req, res, next) =>
    await new Delete().exec(req, ress, next))

module.exports = router    