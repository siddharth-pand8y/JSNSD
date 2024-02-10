import fp from "fastify-plugin";
import sensible from "@fastify/sensible";

/**
 * This plugins adds some utilities to handle http errors
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp(
  /** @type {import('fastify').FastifyPluginAsync<>}*/
  async (fastify) => {
    fastify.register(sensible);
  }
);
