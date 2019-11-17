const express      = require('express')
const app          = express()
require("./servers/db")
 
const index_routes = require("./routes/index")

app.use(express.urlencoded({ extended : true }))

app.use("/index", index_routes)

app.listen(3300, () => {
    console.log(`Example in port 3300`)
})