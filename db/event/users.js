const db = require('../');

const addNewUser = async (sid, name, password, admin = false) => {
  const pool = new db.poolConnect();
  const connection = await pool.connect();

  const result = await pool.sql(
    'INSERT INTO item_management.users (sid, name, password, admin) values (?)',
    [[sid, name, password, admin]]
  );

  connection.release();
  return result;
};

const getUsers = async () => {
  const pool = new db.poolConnect();
  const connection = await pool.connect();

  const result = await pool.sql('SELECT sid, name FROM item_management.users');

  connection.release();
  return result;
};

module.exports = { addNewUser, getUsers };
