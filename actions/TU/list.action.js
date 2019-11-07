const User  = require("../../models/TU")
const API   = require("../../core/action.core")

class list extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let data = await this.list()
            console.log(`data ${data}`)

            return res.send({
                code: 200,
                status: "Success",
                data,
                message: "list successfully !"
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

module.exports = list