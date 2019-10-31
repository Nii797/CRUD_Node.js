const User  = require("../../models/user")
const API   = require("../../core/action.core")

/**
 * ini adalah class inhertance method
 */

class List extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let data = await this.list() // membawa fungsi dari parent class
            console.log(`data ${JSON.stringify(data)}`)

            return res.send({
                code: 200,
                status: "Sukses",
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