// // const User  = require("../../models/user")
// // // const API   = require("../../core/action.core")

// // class getDetail {
// //     constructor(id){
// //         this.id = id
// //     }

// //     async exec() {
// //         try{
// //             let query = await User.findOne({_id: this.id}).exec()

// //             if(query === null){
// //                 throw new Error("No account login")
// //             }

// //             return query
// //         } catch(err){
// //             throw err
// //         }
// //     }
// // }
// // module.exports = getDetail




// const User  = require("../../models/user")
// const API   = require("../../core/action.core")

// class getDetail extends API {
//     constructor(req){
//         this.name   = req.body.name,
//         this.email  = req.body.email
//     }

//     async exec(){
//        try {
//             let tampil_data = {
//                 name: this.name,
//                 email: this.email
//             }
            
//             let query = new User(tampil_data)
//             await query.findOne()
//             console.log(tampil_data)

//             let tampungan = {
//                 user_name: query.name,
//                 user_email: query.email
//             }            

//             return {
//                 tampungan
//             }
//        } catch(err){
//            throw err
//        }
//     }
// }

// module.exports = getDetail

// ==================================================================================================================================

const User  = require("../../models/user")
const API   = require("../../core/action.core")
const jwt   = require("jsonwebtoken")

class Detail extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let user_token  = req.header("Authorization")
            let user_data   = await jwt.verify(user_token, process.env.JWT_SECRET)
            console.log(`User data from token ${user_data.user_id}`)

            let data = await this.getDetail(user_data.user_id)
            console.log(data)

            return res.status(200).json({
                status: "Success",
                data,
                message: "Hallo Selamat datang"
            })
        } catch(err){
            return res.status(400).json({
                status: "Error",
                message: err.message
            })
        }
    }
}

module.exports = Detail

















