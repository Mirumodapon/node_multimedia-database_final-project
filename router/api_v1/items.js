const Router = require('express').Router();

Router.get('/', async (req, res) => {
  try {
    const result = await req.dbEvent.getItemsList();
    res.status(200).format({ code: 200, result, msg: 'Create Succeed.' });
  } catch (error) {
    console.error(error);
    res.status(500).format({ code: 500 });
  }
});

Router.post('/', async (req, res) => {
  try {
    const { uid, no, status, description, enable } = req.body;
    const result = await req.dbEvent.addNewItem(uid, no, status, description, enable);
    res.status(200).format({ code: 200, result, msg: 'Create Succeed.' });
  } catch (error) {
    if (error === 'Can\' find the set') return res.status(400).format({ code: 400 });
    console.error(error);
    res.status(500);
    res.format({ code: 500 });
  }
});

module.exports = Router;
