const express = require('express');
const http = require('http');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use(cors());
const server = http.Server(app);

app.use(express.json());
app.use(routes);

module.exports = { server };