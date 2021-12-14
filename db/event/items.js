const db = require('..');

const addNewItem = async (uid, no, status, description, enable = true) => {
  const pool = new db.poolConnect();
  const connection = await pool.connect();

  const setList = await pool.sql('SELECT uid FROM item_management.set WHERE uid=?', [uid]);
  if (!setList.length) {
    connection.release();
    throw 'Can\' find the set';
  }

  const result = await pool.sql(
    'INSERT INTO item_management.items (uid, no, status, description, enable) values (?)',
    [[uid, no, status, description, enable]]
  );

  connection.release();
  return result;
};

const getItemsList = async () => {
  const pool = new db.poolConnect();
  const connection = await pool.connect();

  const result = await pool.sql('SELECT * FROM item_management.items');

  connection.release();
  return result;
};

module.exports = { addNewItem, getItemsList };
