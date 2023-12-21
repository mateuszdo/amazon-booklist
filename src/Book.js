import React from 'react';

const Book = (props) => {
    const {title, image, author, number} = props
    return (
        <div className="book">
            <p className="bookNumber"># {number + 1}</p>
            <img className="bookImage" src={image} alt=""/>
            <h2 className="bookTitle">{title}</h2>
            <h3 className="bookAuthor">{author}</h3>
        </div>
    )
}

export default Book;