const configPort = require('config').get('port');
const express = require('express');

const app = express();

// middleware
app.use(express.json());
// app handle
app.use('/api/v1', require('./router/api_v1'));

const PORT = configPort || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
