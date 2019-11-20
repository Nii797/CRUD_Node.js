const Book = require("../models/book.models")
const { isInteger } = require("lodash")
const User = require("../models/user.models")

const create = (req) => {
    let { title, description, price, author } = req.body
    price = parseInt(price)
    console.log(`value of proce ${price}`)

    if(isInteger(price) === false) {
        return "Wrong type of `price`"
    }

    var insert_data = {
        title, description, price, author
    }

    let data = new Book(insert_data)
    data.save()

    return data
}

const getAll = async () => {
    let query = await Book.find({}).populate([
        {
            path: 'author',
            model: User
        }
    ]).exec()
    console.log(`result ${query}`)

    return query
}

module.exports = {
    create,
    getAll
}
