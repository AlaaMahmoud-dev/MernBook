import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">MernBook</h1>

      <nav className="nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        {/* <NavLink to="/books" className="nav-link">
          Books
        </NavLink> */}

        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>

        <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
