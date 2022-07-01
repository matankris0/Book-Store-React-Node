import mongoose from "mongoose";

const cartScheme = new mongoose.Schema({
    ownerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: [true, 'User ID required'],
    },

    books: [
        {
            bookID: {
                type: mongoose.SchemaTypes.ObjectId,
                required: [true, 'Book ID required'],
                ref:'Book'
            }
        },
    ],   
});

cartScheme.methods.toJSON = function () {
    const cart = this;

    const cartObj = cart.toObject();
    delete cartObj.__v;
    
    return cartObj;
};


const Cart = mongoose.model('Cart', cartScheme);

export default Cart;