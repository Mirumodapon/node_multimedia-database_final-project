const db = require('..');
const uuid = require('uuid');

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

const getSpecificItemsList = async (uid) => {
  const pool = new db.poolConnect();
  const connection = await pool.connect();

  const result = await pool.sql('SELECT * FROM item_management.items WHERE uid=?', uid);

  connection.release();
  return result;
};

const borrowItem = async (tid, no, sid, name) => {
  const pool = new db.poolConnect();
  const connection = await pool.connect();

  const user = await pool.sql('SELECT sid FROM item_management.users WHERE sid=?', sid);
  if (!user.length) {
    await pool.sql('INSERT INTO item_management.users (sid, name) VALUES (?, ?)', [sid, name]);
  }

  const [{ enable }] = await pool.sql(
    'SELECT enable FROM item_management.items WHERE uid=? AND no=?',
    [tid, no]
  );

  if (!enable) throw 'Can not borrow.';

  await pool.sql('UPDATE item_management.items SET status=1, enable=false WHERE uid=? AND no=?', [
    tid,
    no
  ]);

  await pool.sql('INSERT INTO item_management.borrow (bid, sid, tid, no) VALUES (?,?,?,?)', [
    uuid.v4(),
    sid,
    tid,
    no
  ]);

  connection.release();
};

module.exports = { addNewItem, getItemsList, getSpecificItemsList, borrowItem };
