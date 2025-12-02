import React from 'react';
import BookCard from '../components/BookCard/BookCard';
import books from '../data/books.json';
import '../styles/home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="books-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            year={book.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;