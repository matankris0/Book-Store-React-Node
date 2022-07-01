import Book from "../models/book.model.js";

export const createBook = async (req, res) => {
    const bookData = req.body;

    const book = new Book(bookData);
    try {
        await book.save();
        
        res.status(201).send({
            status: 201,
            statusText: 'Created',
            data: {book: book},
            message: 'Book was created successfully'
        });
    }
    catch (err) {
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: ''
        });
    };
};

export const getBookById = async (req, res) => {
    const bookID = req.params.bookID
    try {
        const bookById = await Book.findById(bookID)

        res.status(200).send({
            status: 200,
            statusText: 'OK',
            data: bookById,
            message: ''
        })
    }
    catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: ''
        })
    }
}

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({})

        res.status(200).send({
            status: 200,
            statusText: 'OK',
            data: {books: books},
            message: ''
        })
    }
    catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: ''
        })
    }
}