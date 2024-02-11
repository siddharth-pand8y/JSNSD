const AutoLoad = require('@fastify/autoload')
const handlebars = require('handlebars')
const path = require('path')
const pointOfView = require('@fastify/view')

module.exports = async function (fastify, opts) {
  fastify.register(pointOfView, {
    root: path.join(__dirname, 'views'),
    engine: { handlebars },
    layout: 'layout.hbs',
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  })

  fastify.setNotFoundHandler((request, reply) => {
    if (request.method !== 'GET') {
      reply.status(405)
      return 'Method Not Allowed\n'
    }
    return 'Not Found\n'
  })
}
