const User      = require("../../models/user")
const API    = require("../../core/action.core")
// const API       = require("../../core/aksi.core.dosen") 
const bcrypt    = require("bcryptjs")
const { validationResult }  = require("express-validator")

class Create extends API {
    constructor(){
        super(User)
    }
    async exec(req, res, next){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.send({
                code: 422,
                status: "error",
                message: errors.array()
            })
        }
        try{
            let { name, email, phone, password } = req.body
            password = bcrypt.hashSync(password, 8) // params, salt
            console.log(`Hashing Password ${password}`)
            let request_data = {
                name,
                email,
                phone,
                password
            }

            let data = await this.buat(request_data)
            return res.send({
                code: 201,
                status: "Sukses",
                data    
            })

        } catch(err){
            return res.status({
                code: 400,
                status: "Error",
                message: err.message
            })
        }
    }
}

module.exports = Create