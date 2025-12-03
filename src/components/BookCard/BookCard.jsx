import "./bookCard.css";
export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-id">#{book.id}</div>

      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>

        <p className="book-author">
          <strong>Author:</strong> {book.author}
        </p>

        <p className="book-genre">
          <strong>Genre:</strong> {book.genre}
        </p>

        <p className="book-year">
          <strong>Year:</strong> {book.year}
        </p>
      </div>
    </div>
  );
}
