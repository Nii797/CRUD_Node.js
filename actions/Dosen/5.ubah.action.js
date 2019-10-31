const User  = require("../../models/dosen")
const API   = require("../../core/aksi.core.dosen")

class ubah extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let { nik, nama, email, tlp, matkul } = req.body
            let update_data = {
                nik,
                nama,
                email,
                tlp,
                matkul
            }

            let data = await this.ubah(id, update_data)

            return res.send({
                code: 200,
                status: "Sukses",
                data
            })
        } catch(err){
            return res.send({
                code: 400,
                status : "Error Update",
                message: err.message
            })
        }
    }
}

module.exports = ubah