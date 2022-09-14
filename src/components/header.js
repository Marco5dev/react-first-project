import React from 'react';
import './header.css';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1><Link to="/">Marco</Link></h1>

        <nav>
          <ul>
            <li><NavLink className="Nav" to="/">Home</NavLink></li>
            <li><NavLink className="Nav" to="/hello">Hello</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
