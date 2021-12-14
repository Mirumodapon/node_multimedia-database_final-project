const db = require('../');

const addNewSet = async (uid, name, count, description) => {
  const pool = new db.poolConnect();
  const connection = await pool.connect();

  const result = await pool.sql(
    'INSERT INTO item_management.set (uid, name, count, description) values (?)',
    [[uid, name, count, description]]
  );

  connection.release();
  return result;
};

const getSetsList = async () => {
  const pool = new db.poolConnect();
  const connection = await pool.connect();

  const result = await pool.sql('SELECT * FROM item_management.set');

  connection.release();
  return result;
};

module.exports = { addNewSet, getSetsList };
