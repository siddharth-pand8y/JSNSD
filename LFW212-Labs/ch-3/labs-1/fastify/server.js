const fastify = require("fastify")({
  logger: true,
});

const data = require("./data");

fastify.get("/", async (request, response) => {
  return await data();
});

fastify.listen({ port: process.env.PORT || 3000 }).catch((e) => {
  fastify.log.error(e);
  process.exit(1);
});
