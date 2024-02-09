"use strict";

module.exports = async (fastify, opts) => {
  fastify.get("/", async (request, reply) => {
    const { body = "Me" } = request.query;
    return reply.view("layout.hbs", {body});
  });
};
