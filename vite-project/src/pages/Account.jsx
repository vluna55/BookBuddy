import React, { useContext, useEffect, useState } from "react";
import { checkoutBook, getUser, returnBook } from "../API";
import UserContext from "../components/UserContext";
import UserBook from "../components/UserBook";

const Account = () => {
  const { token } = useContext(UserContext);

  const [user, setUser] = useState(null);
  async function displayUser() {
    try {
      console.log("Account", token);
      const result = await getUser(token);

      console.log("download user account", result);
      setUser(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    displayUser();
  }, []);

  async function handleReturn(id, token) {
    const reservation = await returnBook(id, token);
    console.log(reservation);
    displayUser();
  }
  return (
    <>
      {user && (
        <>
          <ul>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.firstname}</p>
            <p>{user.firstname}</p>
            {user.books.map((book) => (
              <UserBook
                key={book.id}
                book={book}
                onReturnClicked={() => {
                  handleReturn(book.id, token);
                }}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Account;
