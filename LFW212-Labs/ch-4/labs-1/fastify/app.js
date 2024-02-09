// const { join } = require("node:path");
// const autoLoad = require("@fastify/autoload");
// const fastify = require("fastify")({ logger: true });
const handlebars = require("handlebars");

// const server = async(fastify, opts) => {
//   fastify.register(view, {
//     root: join(__dirname, "views"),
//     engine: { handlebars },
//     layout: "layout.hbs",
//   });

//   fastify.register(autoLoad, {
//     dir: join(__dirname, "routes"),
//     options: Object.assign({}, opts),
//   });

//   // await fastify
//   //   .listen({
//   //     port: 3000,
//   //   })
//   //   .catch((e) => {
//   //     fastify.logger.console.error(e);
//   //     process.exit(1);
//   //   });
// };

// module.exports = server;

const path = require("path");
const AutoLoad = require("@fastify/autoload");
const pointOfView = require('@fastify/view');

module.exports = async function (fastify, opts) {
  fastify.register(pointOfView, {
    root: path.join(__dirname, 'views'),
    engine: { handlebars },
    layout: 'layout.hbs',
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });

  fastify.setNotFoundHandler((request, reply) => {
    if (request.method !== "GET") {
      reply.status(405);
      return "Method Not Allowed\n";
    }
    return "Not Found\n";
  });
};
