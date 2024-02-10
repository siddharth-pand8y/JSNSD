import fp from 'fastify-plugin'
import replyFrom from '@fastify/reply-from'

export default fp(
/** @type {import('fastify').FastifyPluginAsync<>} */
  async (fastify, opts) => {
    fastify.register(replyFrom, {
      errorHandler: false
    })
  }
)
