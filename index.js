const configPort = require('config').get('port');
const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(require('./db/middleware'));
app.use(require('./util/middleware/response'));
// app handle
app.use('/api/v1', require('./router/api_v1'));

const PORT = configPort || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
