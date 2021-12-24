import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import ItemsList from './ItemsList';

import getSetList from '../util/getSetList';
import '../assets/style/search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    getSetList().then((response) => this.setState(response.data));
  }

  SetList({ code, result, msg }) {
    if (!code) return <p>Loading...</p>;
    if (code === 200)
      return (
        <table cellPadding={10}>
          <thead></thead>
          <tbody>
            {result.map((x) => (
              <tr key={x.uid}>
                <td>
                  <Link to={`/search/${x.uid}`}>{x.uid}</Link>
                </td>
                <td>{x.name}</td>
                <td>{x.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    else {
      <p>{msg}</p>;
    }
  }

  render() {
    return (
      <main id="search">
        <Routes>
          <Route path="/">
            <Route index element={<this.SetList {...this.state} />} />
            <Route path=":uid" element={<ItemsList />} />
          </Route>
        </Routes>
      </main>
    );
  }
}

export default Search;
