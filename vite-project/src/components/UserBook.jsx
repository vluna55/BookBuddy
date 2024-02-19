import React from "react";
import { Link } from "react-router-dom";

const UserBook = ({ book, onCheckoutClicked, onReturnClicked }) => {
  return (
    <>
      <Link key={book.id} to={`/book/${book.id}`}>
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>By: {book.author}</p>
          <img src={book.coverimage} alt={book.title} />
          {/* <p>{book.description}</p>  */}
        </li>
      </Link>
      {book.available && <button onClick={onCheckoutClicked}>Checkout</button>}
      {!book.available && (
        <button onClick={onReturnClicked}>Return</button>
      )}{" "}
    </>
  );
};

export default UserBook;
