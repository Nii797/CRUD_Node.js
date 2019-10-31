const User  = require("../../models/user")
const API   = require("../../core/action.core")

class deleteAll extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let query = await this.deleteAll(id)

            return res.send({
                code: 200,
                status: "Sukses",
                query
            })    
        } catch(err){
            return res.send({
                code: 400,
                status: "Error hapus semua",
                message: err.message
            })
        }
    }
}

module.exports = deleteAll