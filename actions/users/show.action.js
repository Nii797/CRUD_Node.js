const User  = require("../../models/user")
const API   = require("../../core/action.core")

class Show extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let data   = await this.show(id)
            
            return res.send({
                code: 200,
                status: "Sukses",
                data,
                message: "Data secara detail sukses terambil"
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

module.exports = Show