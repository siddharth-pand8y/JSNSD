"use strict";

const { BICYCLE_SERVICE_PORT = 4040, BRAND_SERVICE_PORT = 5050 } = process.env;
const bicycleSrv = `http://localhost:${BICYCLE_SERVICE_PORT}`;
const brandSrv = `http://localhost:${BRAND_SERVICE_PORT}`;

module.exports = async function (fastify, opts) {
  fastify.get("/:id", async function (request, reply) {
    const { id } = request.params;
    const bicycleUrl = `${bicycleSrv}/${id}`;
    const brandUrl = `${brandSrv}/${id}`;
    const bicycle = await (await fetch(bicycleUrl)).json();
    const brand = await (await fetch(brandUrl)).json();

    return {
      id: bicycle.id,
      color: bicycle.color,
      brand: brand.name,
    };
  });
};
