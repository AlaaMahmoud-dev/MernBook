import React from 'react';
import './bookCard.css';

const BookCard = ({ title, author, genre, year }) => {
  return (
     <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
};

export default BookCard;
