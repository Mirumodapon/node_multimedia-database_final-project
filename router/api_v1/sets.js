const Router = require('express').Router();
const uuid = require('uuid');

Router.get('/', async (req, res) => {
  try {
    const result = await req.dbEvent.getSetsList();
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
    const { name, count, description } = req.body;
    const result = await req.dbEvent.addNewSet(uuid.v4(), name, count, description);
    res.status(200);
    res.format({ code: 200, result, msg: 'Create Succeed.' });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.format({ code: 500 });
  }
});

module.exports = Router;
