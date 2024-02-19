import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Navbar = ({ token }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between border border-white bg-white">
      <div></div>
      <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/account"}> Account </Link>
        <div>
          {user ? (
            `Welcome ${user.firstname}`
          ) : (
            <>
              {token ? null : <Link to={"/register"}>Register</Link>}{" "}
              <Link to={"/login"}> Login </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
