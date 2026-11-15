import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/github-mark-white.svg";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <div>
          <img
            src="https://www.github.com/images/modules/logos_page/GitHub-Mark.png"
            alt="Github Logo"
          />
          <h3>Github</h3>
        </div>
      </Link>
      <div>
        <Link to="/create">
          <p>Create a Repository</p>
        </Link>
        <Link to="/profile">
          <p>Profile</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
