
const Hapi = require('hapi');
require('./database').db;

const postDeveloper = require('./routes/postDeveloper');

const server = Hapi.server({
  host: '127.0.0.1',
  port: 3001,
});

server.route(postDeveloper);

async function start() {
  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();