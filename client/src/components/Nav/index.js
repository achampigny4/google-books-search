import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h5 className="navbar-brand text-light">
        React Google Books
      </h5>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link text-light" href="./search">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="./saved">Saved</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
