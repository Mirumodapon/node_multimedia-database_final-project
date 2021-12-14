const Router = require('express').Router();

const Response = require('../../util/http_response/response');

Router.post('/', async (req, res) => {
  try {
    const { name, password, sid } = req.body;
    const result = await req.dbEvent.addNewUser(sid, name, password);
    res.status(200).send(Response.json({ code: 200, result, msg: 'Create Succeed.' }));
  } catch (error) {
    console.error(error);
    res.status(500).send(Response.json({ code: 500 }));
  }
});

module.exports = Router;
