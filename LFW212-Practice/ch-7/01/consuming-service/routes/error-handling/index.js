"use strict";

const { BICYCLE_SERVICE_PORT = 4040, BRAND_SERVICE_PORT = 5050 } = process.env;
const bicycleSrv = `http://localhost:${BICYCLE_SERVICE_PORT}`;
const brandSrv = `http://localhost:${BRAND_SERVICE_PORT}`;

module.exports = async function (fastify, opts) {
  fastify.get("/:id", async function (request, reply) {
    const { id } = request.params;

    console.log({ id });

    const noop = Function.prototype;
    const signal = AbortSignal.timeout(3000);
    const bicycleReq = await fetch(`${bicycleSrv}/${id}`, { signal });
    const brandReq = await fetch(`${brandSrv}/${id}`, { signal });
    console.log({ statusCodes: [bicycleReq.status, brandReq.status] });

    if (bicycleReq.status === 404 || brandReq.status === 404)
      throw fastify.httpErrors.notFound();
    if (bicycleReq.status === 400 || brandReq.status === 400)
      throw fastify.httpErrors.badRequest();

    const bicycleJP = bicycleReq.json();
    const brandJP = brandReq.json();
    bicycleJP.catch(noop);
    brandJP.catch(noop);
    const results = await Promise.allSettled([bicycleJP, brandJP]);

    for (const { reason } of results) {
      if (reason) throw reason;
    }

    const [bicycle, brand] = results.map(({ value }) => value);
    console.log({ bicycle, brand, results });

    return {
      id: bicycle.id,
      color: bicycle.color,
      brand: brand.name,
    };
  });
};
