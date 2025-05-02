const hapi = require('@hapi/hapi');
const route = require('./routes');

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(route);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
}

init()