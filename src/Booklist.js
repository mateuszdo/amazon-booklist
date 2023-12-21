import React, {useState} from 'react';
import Book from './Book.js';
import books from './books';

const Booklist = () => {
    
    const [showBooks, setShowBooks] = useState(false);
    const [hideBooks, setHideBooks] = useState(true);

    const handleShowBooks = () => {
        setShowBooks(true);
        setHideBooks(false);
    }
    const handleHideBooks = () => {
        setHideBooks(true);
        setShowBooks(false);
    }
    
    return (
        <main>
            <header className="header">
                <h1>Amazon Best Sellers</h1>
                <p>Our most popular products based on sales. Updated frequently.</p>
            </header>
            {showBooks && <button className="showButton" type="button" onClick={handleHideBooks}>Hide Books</button>}
            {hideBooks && <button className="showButton" type="button" onClick={handleShowBooks}>Show Books</button>}
            {showBooks && <section className="booklist">
                {books.map((book, index) => {
                    return (
                        <Book {...book} key={book.id} number={index}/>
                    )
                })}
            </section>}
        </main>
    )
}

export default Booklist;