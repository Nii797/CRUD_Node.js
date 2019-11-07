const User     = require("../../models/dosen")
const bcrypt   = require("bcryptjs")
const jwt      = require("jsonwebtoken")

class Login {
    constructor(req){
        this.email    = req.body.email,
        this.password = req.body.password
    }

    async exec(){
        try{
            let data = await User.find({
                email: this.email,
            }).exec()
            console.log(data)
            if(data.length == 0){
                throw Error("User not found")
            }

            let password = await bcrypt.compare(this.password, data[0].password)
            if(!password){
                throw Error("Unauthenicated")
            }

            let tampungan = {
                user_id: data[0]._id,
                user_nik: data[0].nik,
                user_nama: data[0].nama,
                user_email: data[0].email,
                user_tlp: data[0].tlp,
                user_matkul: data[0].matkul
            }

            let token = jwt.sign(tampungan, process.env.JWT_SECRET, {
                expiresIn: 86400
            })

            return {
                user: tampungan,
                token,
                expires_in: '24 hours'
            }
        } catch(err){
            throw err
        }
    }
}

module.exports = Login