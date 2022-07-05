import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import './home-page.styles.css';
import Loader from "../../components/shared/loader/Loader.component";

const HomePage = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await fetch('http://localhost:3000/books', {});
                
                if (!response.ok) {
                    throw new Error();
                }

                const responseData = await response.json();
                const books = responseData.data.books;
                console.log(books)

                setBooks(books)

            }

            catch (err) {
                alert('Something went wrong')
            };
        };

        setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        getBooks()
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="homepage">
                <div className="books">
                        {books.map((book) => (
                            <div className="individual-book" >
                                <img className="book-cover-homepage" src={book.bookCover} alt={book.title}/>

                                <h3 className="book-name-homepage">{book.title}</h3>

                                <h4 className="book-author-homepage">{book.author}</h4>
                        </div>
                    ))}
        </div>
    </main>
    );
};

export default HomePage;