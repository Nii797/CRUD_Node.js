const User  = require("../../models/TU")
const API   = require("../../core/action.core")

class Show extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{    
            let { id }  = req.params
            let data    = await this.list(id)
            
            return res.send({
                code: 200,
                data,
                status: "Success",
                message: "List Successfully !!!" 
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