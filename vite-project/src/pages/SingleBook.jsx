import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../API";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    async function displayBook() {
      const { book } = await getBook(id);
      console.log(book);
      setBook(book);
    }
    displayBook();
  }, []);
  return (
    <>
      <h2>{book.title}</h2>
      <p>By: {book.author}</p>
      <p>{book.available}</p>
      <img src={book.coverimage} alt={book.title} />
      <p>{book.description}</p>
    </>
  );
};

export default SingleBook;
