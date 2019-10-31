const User  = require("../../models/dosen")
const API   = require("../../core/aksi.core.dosen")

class Cari extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let params = {}
            let { nik, nama, email, tlp, matkul  } = req.query

                if(nik){
                    params.nik = nik             
                }

                if(nama){   
                    params.nama = {
                        $regex: `${nama}`,
                        $options: 'i'
                    }
                }

                if(email){
                    params.email = email
                }

                if(tlp){
                    params.tlp   = tlp
                }

                if(matkul){
                    params.makul =  matkul
                }
            
            let data = await this.cari(params)
            console.log(`data ${JSON.stringify(data)}`) 
            
            return res.send({
                code: 200,
                status: "Sukses",
                data
            })

        } catch(err){
            return res.send({
                code: 400,
                status: "Pencarian gagal",
                message: err.message
            })
        }
    }
}

module.exports = Cari