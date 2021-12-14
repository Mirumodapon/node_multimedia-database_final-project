const Router = require('express').Router();

Router.get('/', async (req, res) => {
  try {
    const result = await req.dbEvent.getUsers();
    res.status(200);
    res.format({ code: 200, result, msg: 'Create Succeed.' });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.format({ code: 500 });
  }
});

Router.post('/', async (req, res) => {
  try {
    const { name, password, sid } = req.body;
    const result = await req.dbEvent.addNewUser(sid, name, password);
    res.status(200);
    res.format({ code: 200, result, msg: 'Create Succeed.' });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.format({ code: 500 });
  }
});

module.exports = Router;
