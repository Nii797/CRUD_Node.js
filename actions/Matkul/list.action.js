const User  = require("../../models/matkul")
const API   = require("../../core/action.core")

class List extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let data = await this.list()
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

module.exports = List