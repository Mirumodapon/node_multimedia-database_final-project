import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getItemsList from '../util/getItemsList';

function ItemsList() {
  const [list, setList] = useState({});
  const { uid } = useParams();
  useEffect(() => {
    getItemsList(uid).then((response) => setList(response.data));
  });

  return (
    <>
      {list.code ? (
        list.code === 200 ? (
          <table cellPadding={10}>
            <thead>
              <td>no</td>
              <td>status</td>
              <td>description</td>
              <td>enable</td>
            </thead>
            <tbody>
              {list.result.map((x) => (
                <tr>
                  <td>{x.no}</td>
                  <td>{x.status}</td>
                  <td>{x.description}</td>
                  <td>{x.enable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>{list.msg}</p>
        )
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

export default ItemsList;
