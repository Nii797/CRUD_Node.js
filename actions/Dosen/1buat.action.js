const User                 = require("../../models/dosen")
const API                  = require("../../core/aksi.core.dosen")
const bcrypt               = require("bcryptjs")
const { validationResult } = require("express-validator")

class Buat extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.send({
                code: 422,
                status: "Error",
                message: errors.array()
            })
        }

        try{
            let { nik, nama, email, tlp, matkul, password } = req.body
            password = bcrypt.hashSync(password, 8)
            console.log(`Hashing password ${password}`)
            let request_data = {
                nik,
                nama,
                email,
                tlp,
                matkul,
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

module.exports = Buat