import proxy from "@fastify/http-proxy";
import sensible from "@fastify/sensible";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('fastify').FastifyPluginAsync<>} */
export default async function (fastify, opts) {
  // Place here your custom code!
  fastify.register(sensible);

  fastify.register(proxy, {
    upstream: "https://news.ycombinator.com/",
    async preHandler(request, reply) {
      if (request.query.token !== "abc") {
        throw fastify.httpErrors.unauthorized();
      }
    },
  });
}
