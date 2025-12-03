import { useEffect, useState } from "react";
import BookCard from "../components/BookCard/BookCard";
import "../styles/home.css";
import booksData from "../data/books.json";
import SearchBar from "../components/SearchBar/SearchBar";
import SortSelect from "../components/SortSelect/SortSelect";
export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Load books from JSON
    setBooks(booksData);
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Books List</h1>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
