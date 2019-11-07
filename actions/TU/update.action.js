const User  = require("../../models/TU")
const API   = require("../../core/action.core")

class Update extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let { nomor_induk, nama, jurusan, keterangan } = req.body
            let update_data = {
                nomor_induk, nama, jurusan, keterangan
            }

            let data = await this.update(id, update_data)

            return res.send({
                code: 400,
                status: Success,
                data
            })
        } catch(err){
            return res.send({
                code: 400,
                status: "Error Update",
                message: err.message
            })
        }
    }
}

module.exports = Update