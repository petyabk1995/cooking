require('./config/mongoose');
const express = require('express');
const app = express();
const {PORT} = require('./config/config');
const routes = require('./routes');

require('./config/express')(app)

app.listen(PORT, () => console.log('Running...'));
app.use(routes);
