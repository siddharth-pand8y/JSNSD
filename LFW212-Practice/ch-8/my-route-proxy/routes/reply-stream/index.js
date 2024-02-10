import { Readable } from "node:stream";

async function* upper(res) {
  for await (const chunk of res) {
    yield chunk.toString().toUpperCase();
  }
}

/** @type {import('fastify').FastifyPluginAsync<>} */
export default async (fastify, opts) => {
  fastify.get("/", (requeset, reply) => {
    const { url } = request.query;
    try {
      new URL(url);
    } catch (error) {
      throw fastify.httpErrors.badRequest();
    }

    return reply.from(url, {
      onResponse(request, reply, res) {
        reply.send(Readable.from(upper(res)));
      },
    });
  });
};
