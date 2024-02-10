"use strict";

const { BICYCLE_SERVICE_PORT = 4040 } = process.env;
const bicycleSrv = `http://localhost:${BICYCLE_SERVICE_PORT}`;

module.exports = async function (fastify, opts) {
  fastify.get("/:id", async function (request, reply) {
    const { id } = request.params;
    const res = await fetch(`${bicycleSrv}/${id}`);
    const bicycle = res.json();
    return bicycle;
  });
};
