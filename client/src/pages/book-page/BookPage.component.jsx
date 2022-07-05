import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { AuthContext } from "../../contexts/Auth.context";

import './book-page.styles.css'
import Loader from "../../components/shared/loader/Loader.component";

const BookPage = () => {
    const authContextValue = useContext(AuthContext)

    const params = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [book, setBook] = useState(null);

    const handleAddToCart = async () => {
        const data = { bookID: params.bookID };
        if (authContextValue.userToken !== null) {
    
            try {
            
                const response = await fetch('http://localhost:3000/cart/add-to-cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authContextValue.userToken,
                    },
                    body: JSON.stringify(data),
                });

                if (response.status !== 201) {
                    throw new Error();
                }

                const responseObj = await response.json();
                const message = responseObj.message;

                alert(message);
            }
        
            catch (err) {
                alert('Something went wrong')
            }
        } else {
            alert('You must be logged in!')
        }
    }

    useEffect(() => {
        const bookID = params.bookID;

        const getBook = async () => {
            try {
                const response = await fetch(`http://localhost:3000/books/${bookID}`);

                if (!response.ok) {
                    throw new Error();
                }

                const responseData = await response.json();
                const book = responseData.data.bookById;

                setBook(book);

            }

            catch (err) {
                alert('Something went wrong')
            };
        };

        setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        getBook()
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
            <main className="book-page">
                <div className="book-form">
                        <img className="book-cover-book-page" src={book.bookCover} alt={book.title} />

                        <div className="text-form">
                            <h2 className="book-name">{book.title}</h2>

                            <h4 className="book-author">{book.author}</h4>

                            <h4 className="pages-number">Pages: {book.pages}</h4>
                            
                            <h4 className="book-price">Price: ${book.price}</h4>

                        <button type="button" className="add-to-cart" onClick={handleAddToCart}>Add To Cart</button>

                            <p className="book-description">{book.description}</p>
                    </div>
                    </div>
        </main>
    )
}

export default BookPage