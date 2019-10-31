const User  = require("../../models/dosen")
const API   = require("../../core/aksi.core.dosen")

class list extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let data = await this.list()
            console.log(`data ${JSON.stringify(data)}`)

            return res.send({
                code: 200,
                status: "Sukses",
                data,
                message: "Semua data dosen tampil"
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

module.exports = list