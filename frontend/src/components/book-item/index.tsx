import React from "react";
import "./style.css";
const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <a href={`/pdf-reader?id=${book._id}`} target="_blanket">
        <img src={book.cover} className="book-cover" alt={book.name} />
        <p>{book.name}</p>
      </a>
    </div>
  );
};

export default BookItem;
