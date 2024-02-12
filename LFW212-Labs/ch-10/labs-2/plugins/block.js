const fp = require('fastify-plugin')

module.exports = fp(
  /** @type {import('fastify').FastifyPluginAsync<>} */
  async function (fastify, opts) {
    fastify.addHook('onRequest', async (request) => {
      if (request.ip === '211.133.33.113') {
        throw fastify.httpErrors.forbidden()
      }
    })
  }
)
