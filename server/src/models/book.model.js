import mongoose from "mongoose";

const bookScheme = new mongoose.Schema({
    title: {
        type: String,
        required: [true,'Title is required'],
        trim:true,
    },
    author: {
        type: String,
        required: [true,'Author is required'],
        trim:true,
    },
    bookCover: {
        type: String,
        required: [true,'Book cover is required'],
        trim:true,
    },
    description: {
        type: String,
        required: [true,'Description is required'],
        trim:true,
    },
    pages: {
        type: Number,
        required: [true,'Pages is required'],
        trim:true,
    },
    price: {
        type: Number,
        required: [true,'Price is required'],
        trim:true,
        min: 0
    },
})
bookScheme.methods.toJSON = function () {
    const book = this

    const bookObj = book.toObject()
    delete bookObj.__v

    return bookObj
}

const Book = mongoose.model('Book', bookScheme)

export default Book