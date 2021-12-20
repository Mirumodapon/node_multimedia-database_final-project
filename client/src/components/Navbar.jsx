import React, { Component } from 'react';

import '../assets/style/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Borrow</a>
          </li>
          <li>
            <a href="#">Return</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
