const express      = require('express')
const app          = express()
require("./servers/db")

const barangg      = require("./routes/barang.routes")  
const index_routes = require("./routes/index")
const karyawan     = require("./routes/pegawai.routes")

app.use(express.urlencoded({ extended : true }))

app.use("/barang", barangg)
app.use("/index", index_routes)
app.use("/pegawai", karyawan)

app.listen(3300, () => {
    console.log(`Example in port 3300`)
})