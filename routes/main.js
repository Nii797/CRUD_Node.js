// const verifyToken   = require("../../middlewares/verify_token.middleware")
const users        = require("./users")
const dosens       = require("./dosen")
const indexs       = require("./index")
const auths        = require("./auth.route") 

const route = (app) => {
    app.use("/user", users)
    app.use("/dosen", dosens)
    app.use("/index", indexs)
    app.use("/auth", auths)
}

module.exports = route