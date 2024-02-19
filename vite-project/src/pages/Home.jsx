import { useContext, useEffect, useState } from "react";
import { checkoutBook, getBooks, returnBook } from "../API";
import UserContext from "../components/UserContext";
import UserBook from "../components/UserBook";

const Home = () => {
  const [books, setBooks] = useState([]);
  const { user, token } = useContext(UserContext);
  const [search, setSearch] = useState("");

  async function displayBooks() {
    const { books } = await getBooks();
    setBooks(books);
  }

  useEffect(() => {
    displayBooks();
  }, []); 

  useEffect(() => {
    const fetchBooks = async () => {
      const { books } = await getBooks();
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setBooks(filteredBooks);
    };

    fetchBooks();
  }, [search]); 

  useEffect(() => {
    const fetchBooks = async () => {
      const { books } = await getBooks();
      const filteredBooks = books.filter((book) =>
        book.title.toUpperCase().includes(search.toUpperCase())
      );
      setBooks(filteredBooks);
    };

    fetchBooks();
  }, [search]); 

  async function checkout(id, token) {
    const reservation = await checkoutBook(id, token);
    console.log(reservation);
    displayBooks(); 
  }

  async function handleReturn(id, token) {
    const reservation = await returnBook(id, token);
    console.log(reservation);
    displayBooks(); 
  }

  return (
    <div>
      <div>{user?.firstname}</div>
      <h1>Books</h1>
      <label>Search:  </label>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {books.map((book) => (
          <UserBook
            key={book.id}
            book={book}
            onCheckoutClicked={() => {
              checkout(book.id, token);
            }}
            onReturnClicked={() => {
              handleReturn(book.id, token);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
