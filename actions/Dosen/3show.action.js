const User  = require("../../models/dosen")
const API   = require("../../core/aksi.core.dosen")

class Tampil extends API  {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let data   = await this.tampil(id)
            
            return res.send({
                code: 200,
                status: "Sukses",
                data,
                message: "Data yang dipilih berhasil ditampilkan"
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

module.exports = Tampil