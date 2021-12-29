import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getItemsList from '../util/getItemsList';
import borrowItem from '../util/borrowItem';

function ItemsList() {
  const [list, setList] = useState({});
  const { uid } = useParams();
  useEffect(() => {
    getItemsList(uid).then((response) => setList(response.data));
  }, []);

  const status = (no) => {
    switch (no) {
      case 0:
        return '正常';
      case 1:
        return '已借出';
      case 2:
        return '損毀';
      case 3:
        return '缺件';
      default:
        return '未定義';
    }
  };

  const borrow = (x) => {
    const name = prompt('Please enter name: ');
    const id = prompt('Please enter student id: ');

    if (name && id) {
      console.log(x, name, id);
      borrowItem({ ...x, name, sid: id })
        .then((x) => alert(x.status))
        .then(() => setList({}))
        .then(() => getItemsList(uid).then((response) => setList(response.data)));
    }
  };

  return (
    <>
      {list.code ? (
        list.code === 200 ? (
          <table cellPadding={10}>
            <thead>
              <tr>
                <td>no</td>
                <td>status</td>
                <td>description</td>
                <td>enable</td>
              </tr>
            </thead>
            <tbody>
              {list.result.map((x) => (
                <tr key={x.no} onClick={() => borrow(x)} style={{ cursor: 'pointer' }}>
                  <td>{x.no}</td>
                  <td>{status(x.status)}</td>
                  <td>{x.description}</td>
                  <td>{x.enable ? '可借用' : '無法借用'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>{list.msg}</p>
        )
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}

export default ItemsList;
