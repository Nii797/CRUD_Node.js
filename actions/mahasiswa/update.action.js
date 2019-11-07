const User  = require("../../models/mahasiswa")
const API   = require("../../core/action.core")

class Update extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let { nomor_induk, nama, email, tlp, jurusan, password, hobi } = req.body
            let update_data = {
                nomor_induk, nama, email, tlp, jurusan, password, hobi
            }

            let data = await this.update(id, update_data)

            return res.send({
                code: 400,
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

module.exports = Update