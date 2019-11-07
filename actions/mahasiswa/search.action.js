const User  = require("../../models/mahasiswa")
const API   = require("../../core/action.core")

class Search extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let params = {}
            let { nomor_induk, nama, email, tlp, jurusan, hobi } = req.query

            if(nomor_induk){
                params.nomor_induk = nomor_induk
            }

            if(nama){
                params.nama = {
                    $regex   : `${nama}`,
                    $options : 'i'
                }
            }

            if(email){
                params.email = {
                    $regex   : `${email}`,
                    $options : 'i'
                }
            }

            if(tlp){
                params.jurusan  = jurusan
            }

            if(hobi){
                params.hobi     = hobi
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
                status: "Serach failed",
                message: err.message
            })
        }
    }
}

module.exports = Search