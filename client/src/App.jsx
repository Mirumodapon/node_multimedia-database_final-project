import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import './assets/style/main.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}

export default App;
