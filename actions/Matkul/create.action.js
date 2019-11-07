const User  = require("../../models/matkul")
const API   = require("../../core/action.core")

class Create extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { kode_matkul, nama_matkul, sks, pengajar } = req.body
            let insert_data = {
                kode_matkul, nama_matkul, sks, pengajar
            }

            let data = await this.create(insert_data)
            
            return res.send({
                code: 200,
                status: "Success",
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

module.exports = Create