const User  = require("../../models/mahasiswa")
const API   = require("../../core/action.core")

class Delete extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id }  = req.params
            let data    = await this.delete(id)

            return res.send({
                code: 200,
                status: "Success",
                data,
                message: "Delete Success"
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