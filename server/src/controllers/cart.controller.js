import Cart from "../models/cart.model.js";

export const getCart = async (req, res) => {
    const ownerID = req.user
    
    try {
        const cart = await Cart.findOne({ownerID: ownerID})

        await cart.populate('books.bookID');

        res.status(200).send({
            status: 200,
            statusText: 'OK',
            data: { cart: cart },
            message: ''
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: ''
        })
    }
}

export const removeFromCart = async (req, res) => {
    const ownerID = req.user
    const bookID = req.body.bookID
    try {
        const cart = await Cart.findOne({ownerID: ownerID})

        cart.books = cart.books.filter(book => book.bookID.toString() !== bookID)

        await cart.populate('books.bookID');
        await cart.save();

        res.status(200).send({
            status: 200,
            statusText: 'OK',
            data: {cart: cart},
            message: 'The book removed from cart successfully'
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: ''
        })
    }
}

export const addToCart = async (req, res) => {
    const ownerID = req.user;
    const bookID = req.body.bookID;

    try {
        const cart = await Cart.findOne({ ownerID: ownerID });

        const books = cart.books;
        if (!books.find((book) => book.bookID.toString() === bookID)) {
            cart.books.unshift({ bookID: bookID });
            await cart.save();
        }

        res.status(201).send({
            status: 201,
            statusText: 'Created',
            data: { cart: cart },
            message: 'Item added to cart successfully'
        });

        
    }
    catch (err) {
        console.log(err)
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: ''
        })
    }
}

export const checkoutCart = async (req, res) => {
    const ownerID = req.user

    try {
        const cart = await Cart.findOne({ownerID: ownerID})
            cart.books = []
            await cart.save();

        res.status(200).send({
            status: 200,
            statusText: 'OK',
            data: {cart: cart},
            message: 'Checkout completed successfully'
        })
    } 
    catch (err) {
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: ''
        })
    }
}