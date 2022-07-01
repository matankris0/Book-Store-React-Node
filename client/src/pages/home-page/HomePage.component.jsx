import React, { useReducer, useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'

import homePageReducer, { LOGIN_FORM_INITIAL_STATE } from "../../reducers/homePage.reducer";
import './home-page.styles.css'
import Loader from "../../components/shared/loader/Loader.component";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [homePageState, dispatchHomePageState] = useReducer(homePageReducer, LOGIN_FORM_INITIAL_STATE)

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await fetch('http://localhost:3000/books', {});
                
                if (!response.ok) {
                    throw new Error();
                }

                const responseData = await response.json();
                const books = responseData.data.books
                console.log(books)

                dispatchHomePageState()
            }

            catch (err) {
                alert('Something went wrong')    
            }
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        getBooks()
    }, []);

    return isLoading ? (
        <Loader />
    ) : (<main className="homepage">
            <div className="books">
            <Link to={'/book'} className='book-link'>
                <div className="individual-book">
                <img className="book-cover-homepage" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />
                <h3 className="book-name-homepage">The Maid</h3>

                <h4 className="book-author-homepage">By Nita Prose</h4>
                </div>
                </Link>
                <div className="individual-book">
                <img className="book-cover-homepage" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />

                <h3 className="book-name-homepage">The Maid</h3>
                <h4 className="book-author-homepage">By Nita Prose</h4>
                </div>

                <div className="individual-book">
                <img className="book-cover-homepage" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />
                <h3 className="book-name-homepage">The Maid</h3>

                <h4 className="book-author-homepage">By Nita Prose</h4>
                </div>

                <div className="individual-book">
                <img className="book-cover-homepage" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />
                <h3 className="book-name-homepage">The Maid</h3>

                <h4 className="book-author-homepage">By Nita Prose</h4>
                </div>

                <div className="individual-book">
                <img className="book-cover-homepage" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />
                <h3 className="book-name-homepage">The Maid</h3>

                <h4 className="book-author-homepage">By Nita Prose</h4>
                </div>

                <div className="individual-book">
                <img className="book-cover-homepage" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />
                <h3 className="book-name-homepage">The Maid</h3>

                <h4 className="book-author-homepage">By Nita Prose</h4>
                </div>

                <div className="individual-book">
                <img className="book-cover-homepage" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />
                <h3 className="book-name-homepage">The Maid</h3>

                <h4 className="book-author-homepage">By Nita Prose</h4>
                </div>
            </div>
        </main>
    )
}

export default HomePage