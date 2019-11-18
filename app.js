const express      = require('express')
const app          = express()
require("./servers/db")
 
const index_routes   = require("./routes/index") 
const books          = require("./routes/buku.routes")  

app.use(express.urlencoded({ extended : true }))

app.use("/index", index_routes)
app.use("/buku", books)

app.listen(3300, () => {
    console.log(`Example port to 3300`)
})