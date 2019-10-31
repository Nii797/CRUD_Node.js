const ResetPassword = require("../../models/reset_password.model")
const User          = require("../../models/user")
const { randomkey } = require("../../lib/helper")
const SendMail      = require("../emails/send-mailtrap.action")

class forgotPass{
    constructor(email){
        this.email = email
    }

    async exec(){
        try{

        } catch(err){
            
        }
    }
}
module.exports = forgotPass
