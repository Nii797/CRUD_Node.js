let mongoose = require("mongoose")
var host     = "mongodb://localhost:27017/apotek"

mongoose.connect(host, {
    'useNewUrlParser' : true
})

mongoose.set('useCreateIndex', true)