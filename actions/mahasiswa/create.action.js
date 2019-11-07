const User         = require("../../models/mahasiswa")
const API          = require("../../core/action.core")

class Create extends API{
    constructor(){
        super(User)
    }

    async exec(req, res, next){ 
        try{
            let { nomor_induk, nama, email, tlp, jurusan, password, hobi } = req.body
            // password = bcrypt.hashSync(password, 10)
            // console.log(`Hashing password ${password}`)
            let insert_data = {
                nomor_induk,
                nama,
                email,
                tlp,
                jurusan,
                password,
                hobi    
            }

            let data = await this.create(insert_data)
            return res.send({
                code: 201,
                data,
                status: "Success"
            })
            
        } catch(err){
            return res.status({
                code: 400,
                status: "Error",
                message: err.message
            })
        }
    }
}

module.exports = Create