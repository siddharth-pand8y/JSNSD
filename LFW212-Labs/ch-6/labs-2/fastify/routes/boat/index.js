const { boat } = require("../../model");
const { promisify } = require("node:util");
const read = promisify(boat.read);
const del = promisify(boat.del);

async function boatRoutes(fastify, options) {
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;

    try {
      const info = await read(id);
      reply.send(info);
      return;
    } catch (error) {
      if (error.code === "E_NOT_FOUND") {
        reply.code(404).send("Not Found");
        return;
      }
      throw error;
    }
  });

  fastify.delete("/:id", async (request, reply) => {
    const { id } = request.params;
    try {
      await del(id);
      reply.code(204);
    } catch (error) {
      if (error.code === "E_NOT_FOUND") {
        reply.code(404).send("Not Found");
        return;
      }
      throw error;
    }
  });
}

module.exports = boatRoutes;
