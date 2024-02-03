'use strict'
const { Readable } = require('stream')
async function * upper (res) {
  for await (const chunk of res) {
    yield chunk.toString().toUpperCase()
  }  
}
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const { url } = request.query
    try {
      new URL(url)
    } catch (err) {
      console.log(err)
      throw fastify.httpErrors.badRequest()
    }
    return reply.from(url, {
      onResponse (request, reply, res) {
        reply.send(Readable.from(upper(res)))
      }
    })
  })
}

