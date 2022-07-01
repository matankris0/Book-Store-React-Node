import React from "react";
import './book-page.styles.css'

const BookPage = () => {
    return (
        <main className="book-page">
            <div className="book-form">
                <img className="book-cover-book-page" src="https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg" alt="The Maid" />

                <div className="text-form">
                    <h2 className="book-name">The Maid</h2>

                    <h4 className="book-author">By Nita Prose</h4>

                    <h4 className="pages-number">Pages: 240</h4>

                    <h4 className="book-price">Price: $18.99</h4>

                    <button type="button" className="add-to-cart">Add To Cart</button>

                    <p className="book-description">Molly Gray is not like everyone else. She struggles with social skills and misreads the intentions of others. Her gran used to interpret the world for her, codifying it into simple rules that Molly could live by. Since Gran died a few months ago, twenty-five-year-old Molly has been navigating life’s complexities all by herself. No matter—she throws herself with gusto into her work as a hotel maid. Her unique character, along with her obsessive love of cleaning and proper etiquette, make her an ideal fit for the job. She delights in donning her crisp uniform each morning, stocking her cart with miniature soaps and bottles, and returning guest rooms at the Regency Grand Hotel to a state of perfection. But Molly’s orderly life is upended the day she enters the suite of the infamous and wealthy Charles Black, only to find it in a state of disarray and Mr. Black himself dead in his bed. Before she knows what’s happening, Molly’s unusual demeanor has the police targeting her as their lead suspect. She quickly finds herself caught in a web of deception, one she has no idea how to untangle. Fortunately for Molly, friends she never knew she had unite with her in a search for clues to what really happened to Mr. Black—but will they be able to find the real killer before it’s too late? A Clue-like, locked-room mystery and a heartwarming journey of the spirit, The Maid explores what it means to be the same as everyone else and yet entirely different—and reveals that all mysteries can be solved through connection to the human heart.</p>
                </div>
            </div>
        </main>
    )
}

export default BookPage