import React, {useContext, useEffect,useState} from "react";
import './cart-page.styles.css';
import { AuthContext } from "../../contexts/Auth.context";
import Loader from "../../components/shared/loader/Loader.component";

const CartPage = () => {
    const authContextValue = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getCart = async () => {
            try {
                const response = await fetch('http://localhost:3000/cart',
                    {
                        method: 'GET',
                        headers: {
                            'Authorization': authContextValue.userToken,
                        },
                    })
                
                if (!response.ok) {
                    throw new Error();
                }

                const responseObj = await response.json();
                const books = responseObj.data.cart;
                console.log(books)
                
                setBooks(books)
            }

            catch (err) {
                alert('Something went wrong!')
            }
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        getCart()
    }, []);
        
    return isLoading ? (
        <Loader />
    ) : (
        <main className="cart-page">
            <div className="cart-items">
                {books.map((book) => (

                <div className="individual-item">
                        <img className="book-cover-cart" src={book.bookCover} alt={book.title} />

                    
                        <h3 className="book-name-cart">{book.title}</h3>

                        <h4 className="book-author-cart">{book.author}</h4>
                    
                    
                        <h4 className="book-price-cart">${book.price}</h4>

                    <button type="button" className="remove-from-cart">Remove From Cart</button>
                </div>
                ))}
            </div>

            <div className="total">
                <h3>Total Price: $18.99</h3>

                <button type="button" className="Checkout-btn">Checkout</button>
            </div>
        </main>
    );
};

export default CartPage;