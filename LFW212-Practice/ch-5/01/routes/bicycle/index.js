const { bicycle } = require("../../model");

module.exports = async (fastify, opts) => {
  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    bicycle.read(id, (err, result) => {
      if (err) {
        if (err.message === "not found") reply.notFound();
        else reply.send(err);
      } else reply.send(result);
    });
    await reply
  });
};
