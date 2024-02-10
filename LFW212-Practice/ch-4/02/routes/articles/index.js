const hnLatestStream = require("hn-latest-stream");

module.exports = async (fastify, opts) => {
  fastify.get("/", async (request, reply) => {
    const { amount = 10, type = "html" } = request.query;

    switch (type) {
      case "html":
        reply.type("text/html");
        break;
      case "json":
        reply.type("application/json");
        break;
    }

    console.log({amount, type})

    return hnLatestStream(amount, type)
  });
};
