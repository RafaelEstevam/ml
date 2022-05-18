const { server } = require('./http');

const porta = process.env.PORT || 8081;

server.listen(porta);