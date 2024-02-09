const model = require("../../model");
const { promisify } = require("node:util");
const create = promisify(model.boat.create);
const read = promisify(model.boat.read);

async function boatRoutes(fastify, options) {
  fastify.post("/", async (request, reply) => {
    const { data } = request.body;

    const id = model.boat.uid();
    console.log({ id });

    try {
      const createdId = await create(id, data);
      reply.type("application/json").code(201).send({ id });
      return;
    } catch (err) {
      fastify.log.error(err);
      return reply.send(err);
    }
  });

  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    try {
      reply.send(await read(id));
      return;
    } catch (error) {
      throw error;
    }
  });
}

module.exports = boatRoutes;
