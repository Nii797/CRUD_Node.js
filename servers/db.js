let mongoose = require("mongoose")
let host     = "mongodb://localhost:27017/day8"

mongoose.connect(host, {
    'useNewUrlParser' : true
})

mongoose.set('userCreateIndex', true)