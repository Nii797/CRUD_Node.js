const express      = require('express')
const app          = express()
require("./servers/db")
 
const index_routes   = require("./routes/index") 
const boook          = require("./routes/book.routes")  
const Userr          = require("./routes/user.routes")

app.use(express.urlencoded({ extended : true }))

app.use("/index", index_routes)
app.use("/book", boook)
app.use("/user", Userr)

app.listen(3300, () => {
    console.log(`Example port to 3300`)
})