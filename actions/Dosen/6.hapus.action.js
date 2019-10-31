const User  = require("../../models/dosen")
const API   = require("../../core/aksi.core.dosen")

class hapus extends API{
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let data = await this.hapus(id)

            return res.send({
                code: 200,
                message: "Sukses menghapus",
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

module.exports = hapus