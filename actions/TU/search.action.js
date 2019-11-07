const User  = require("../../models/TU")
const API   = require("../../core/action.core")

class Search extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let params  = {}
            let { nomor_induk, nama, jurusan, keterangan } = req.query

                if(nomor_induk){
                    params.nomor_induk = nomor_induk
                }

                if(nama){
                    params.nama = {
                        $regex: `${nama}`,
                        $options: 'i'
                    }
                }

                if(jurusan){
                    params.jurusan = {
                        $regex: `${jurusan}`,
                        $options: 'i'
                    }
                }

                if(keterangan){
                    params.keterangan = {
                        $regex: `${keterangan}`,
                        $options: 'i'
                    }
                }

                let data = await this.search(params)
                console.log(`data ${JSON.stringify(data)}`)

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

module.exports = Search