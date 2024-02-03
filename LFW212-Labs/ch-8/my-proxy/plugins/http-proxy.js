'use strict'

const fp = require('fastify-plugin')
const httpProxy = require('@fastify/http-proxy')
module.exports = fp(async function (fastify, opts) {
  fastify.register(httpProxy, {
    errorHandler: false,
    upstream: 'https://news.ycombinator.com/'
  })
})
