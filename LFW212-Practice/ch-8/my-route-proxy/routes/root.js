/** @type{import('fastify').FastifyPluginAsync<>} */
export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const { url } = request.query
    try {
      new URL(url)
    } catch (error) {
      throw fastify.httpErrors.badRequest()
    }
    return reply.from(url)
  })
}
