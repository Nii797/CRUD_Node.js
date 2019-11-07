const User  = require("../../models/TU")
const API   = require("../../core/action.core")

class Delete extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let query  = await this.deleteAll(id)

            return res.send({
                code: 200,
                status: "Success",
                query
            })
        } catch(err){
            return res.send({
                code: 400,
                status: "Error",
                message: err.message
            })
        }
    }
}

module.exports = Delete