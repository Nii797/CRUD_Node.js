const User  = require("../../models/TU")
const API   = require("../../core/action.core")

class Create extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { nomor_induk, nama, jurusan, keterangan  } = req.body
            let insert_data = {
                nomor_induk, nama, jurusan, keterangan
            }

            let data = await this.create(insert_data)
            return res.send({
                code: 201,
                status: "Success",
                message: "Create Success",
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