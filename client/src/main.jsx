import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Search from './components/Search';
import Return from './components/Return';
import Borrow from './components/Borrow';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="search/*" element={<Search />} />
          <Route path="return" element={<Return />} />
          <Route path="borrow" element={<Borrow />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
