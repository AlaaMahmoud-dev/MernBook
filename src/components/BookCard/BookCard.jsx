import React from 'react';
import './bookCard.css';

const BookCard = ({ title, author, genre, year }) => {
  return (
     <div className="book-card">
      <div className='book-title'>
        <h3>{title}</h3>
      </div>
      <div className='book-info'>
        <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Year:</strong> {year}</p>
      </div>
    </div>
  );
};

export default BookCard;
