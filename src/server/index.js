
const Hapi = require('hapi');
require('./database').db;

const postDeveloper = require('./routes/postDeveloper');
const getDeveloper = require('./routes/getDeveloper');
const getDevelopers = require('./routes/getDevelopers');
const authentication = require('./routes/authentication');

const server = Hapi.server({
  host: 'localhost',
  port: 3002,
});

server.route(postDeveloper);
server.route(getDeveloper);
server.route(getDevelopers);
server.route(authentication);

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