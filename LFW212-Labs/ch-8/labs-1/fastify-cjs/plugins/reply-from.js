const replyFrom = require('@fastify/reply-from')
const fp = require('fastify-plugin')

module.exports = fp(
  /** @type {import('fastify').FastifyPluginAsync<>} */
  async (fastify, _) => {
    fastify.register(replyFrom, {
      errorHandler: false,
    })
  }
)
