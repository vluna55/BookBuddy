import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import SingleBook from "./pages/SingleBook";
import { UserProvider } from "./components/UserContext";
import Account from "./pages/Account";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null)
  return (
    <>
      <div>
        <UserProvider>
          <Navbar token={token} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
            <Route path="/book/:id" element={<SingleBook />} />
          </Routes>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
