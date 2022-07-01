import express from 'express'
import * as bookController from '../controllers/book.controller.js'

const router = new express.Router()

router.post('/books/new', bookController.createBook)
router.get('/books/:bookID', bookController.getBookById)
router.get('/books', bookController.getBooks)

export default router