const User  = require("../../models/user")
const API   = require("../../core/action.core")
// const { validationResult } = require("express-validator")

class Update extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let { name, email, phone } = req.body
            let update_data = {
                name,
                email,
                phone
            }

            let data = await this.update(id, update_data)
            
            return res.send({
                code: 200,
                status: "Sukses",
                data
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

module.exports = Update