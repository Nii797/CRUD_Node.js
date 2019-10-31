const ResetPassword = require("../../models/reset_password.model")
const ShowPassword  = require("./show.actioin")
const bcrypt        = require("bcryptjs")
const User          = require("../../models/user")

class Reset {
    constructor(password, token){
        this.password  = password,
        this.token     = token 
    }

    async exec(){
        try {
            let data        = await new ShowPassword({ token: this.token }).exec()
            let password    = bcrypt.hashSync(this.password, 5)
            let user        = await User.findOne({ email: data.email }).exec()
            
            if(user === null){
                throw new Error("User not found")
            }

            let updateUser  = await user.findOneAndUpdate({ _id: user._id },{password}).exec()
            await ResetPassword.findOneAndDelete({ token: this.token }).exec()

            return updateUser
        } catch(err){
            throw err
        }
    }
}

module.exports = Reset