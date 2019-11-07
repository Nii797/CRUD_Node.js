const User      = require("../../models/dosen")
const bcrypt    = require("bcryptjs")
const jwt       = require("jsonwebtoken")

class Register {
    constructor(req){
        this.nik       = req.body.nik,
        this.nama      = req.body.nama,
        this.email     = req.body.email,
        this.tlp       = req.body.tlp,
        this.matkul    = req.body.matkul,
        this.password  = req.body.password
    }

    async exec(){
        try{
            let password = bcrypt.hashSync(this.password, 5)
            console.log(`Hashing password ${password}`)
            let insert_data = {
                nik: this.nik,
                nama: this.nama,
                email: this.email,
                tlp: this.tlp,
                matkul: this.matkul,
                password
            }

            let query = new User(insert_data)
            await query.save()

            let tampungan = {
                user_id: query._id,
                user_nik: query.nik,
                user_nama: query.nama,
                user_email: query.email,
                user_tlp: query.tlp,
                user_matkul: query.matkul
            }

            let token = jwt.sign(tampungan, process.env.JWT_SECRET, {
                expiresIn: 86400
            })

            return {
                user: tampungan,
                token, 
                expires_in: '24 Hours'
            }
        } catch(err){
            throw err
        }
    }
}

module.exports = Register