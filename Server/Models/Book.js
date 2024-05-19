const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: String
});

const BookModel = mongoose.model("books", BookSchema)

module.exports = BookModel