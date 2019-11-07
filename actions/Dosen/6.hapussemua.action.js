const User  = require("../../models/dosen")
const API   = require("../../core/aksi.core.dosen")

class hapussemua extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let query  = await this.hapus_semua(id)

            return res.send({
                code: 200,
                status: "Sukses",
                query
            })
        } catch(err){
            return res.send({
                code: 400,
                status: "Gagal Menghapus semua",
                message: err.message
            })
        }
    }
}

module.exports = hapussemua