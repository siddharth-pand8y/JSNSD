"use strict";

const path = require("node:path");
const autoLoad = require("@fastify/autoload");
const pointOfView = require("@fastify/view");
const handlebars = require("handlebars");

module.exports = async function (fastify, opts) {
  fastify.register(pointOfView, {
    root: path.join(__dirname, "views"),
    engine: { handlebars },
    layout: "layout.hbs",
  });

  fastify.register(autoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  fastify.register(autoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.create({}, opts),
  });

  fastify.setNotFoundHandler((request, reply) => {
    if (request.method !== "GET") {
      reply.status(405);
      return "Method Not Allowed\n";
    }

    return "Not Found\n";
  });
};
