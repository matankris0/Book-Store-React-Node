import express from 'express';
import * as cartController from '../controllers/cart.controller.js';
import userAuth from '../middlewares/user.auth.js';

const router = new express.Router();

router.get('/cart', userAuth, cartController.getCart);
router.patch('/cart', userAuth, cartController.removeFromCart);
router.post('/cart/add-to-cart', userAuth, cartController.addToCart)
router.post('/cart/checkout', userAuth, cartController.checkoutCart)



export default router ;