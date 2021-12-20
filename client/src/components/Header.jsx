import React, { Component } from 'react';

import Navbar from './Navbar';
import '../assets/style/header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>NPTU Web Lab</h1>
        <Navbar />
      </header>
    );
  }
}

export default Header;
