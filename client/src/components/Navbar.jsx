import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/borrow">Borrow</Link>
          </li>
          <li>
            <Link to="/return">Return</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
