import React, {useContext} from "react";
import './cart-page.styles.css'
import { AuthContext } from "../../contexts/Auth.context";

const CartPage = () => {

    return (
        <main className="cart-page">
            <div className="cart-items">
                <div className="individual-item">
                    <img className="book-cover-cart" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />

                    
                    <h3 className="book-name-cart">The Maid</h3>

                    <h4 className="book-author-cart">By Nita Prose</h4>
                    
                    
                    <h4 className="book-price-cart">$18.99</h4>

                    <button type="button" className="remove-from-cart">Remove From Cart</button>
                </div>

                <div className="individual-item">
                    <img className="book-cover-cart" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />

                    
                    <h3 className="book-name-cart">The Maid</h3>

                    <h4 className="book-author-cart">By Nita Prose</h4>
                    
                    
                    <h4 className="book-price-cart">$18.99</h4>

                    <button type="button" className="remove-from-cart">Remove From Cart</button>
                </div>
            </div>

            <div className="total">
                <h3>Total Price: $37.98</h3>

                <button type="button" className="Checkout-btn">Checkout</button>
            </div>
        </main>
    )
}

export default CartPage