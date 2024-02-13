# Hooks

Hooks are registered using `fastify.addHook('eventName', (request,reply) => {})`





Application Hooks
-----------------

You can hook into the application-lifecycle as well.

* [onReady](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onready)
* [onListen](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onlisten)
* [onClose](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onclose)
* [preClose](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#preclose)
* [onRoute](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onroute)
* [onRegister](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onregister)



## [Request/Reply Hooks](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#requestreply-hooks)

* [onRequest](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onrequest)
* [preParsing](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#preparsing)
* [preValidation](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#prevalidation)
* [preHandler](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#prehandler)
* [preSerialization](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#preserialization)
* [onError](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onerror)
* [onSend](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onsend)
* [onResponse](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onresponse)
* [onTimeout](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#ontimeout)
* [onRequestAbort](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#onrequestabort)
* [Manage Errors from a hook](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#manage-errors-from-a-hook)
* [Respond to a request from a hook](https://fastify.dev/docs/v4.26.x/Reference/Hooks/#respond-to-a-request-from-a-hook)



Example of root level hook

```js
fastify.route({
  method: 'GET',
  url: '/',
  schema: { ... },
  onRequest: function (request, reply, done) {
    // This hook will always be executed after the shared `onRequest` hooks
    done()
  },
  // // Example with an async hook. All hooks support this syntax
  //
  // onRequest: async function (request, reply) {
  //  // This hook will always be executed after the shared `onRequest` hooks
  //  await ...
  // }
  onResponse: function (request, reply, done) {
    // this hook will always be executed after the shared `onResponse` hooks
    done()
  },
  preParsing: function (request, reply, done) {
    // This hook will always be executed after the shared `preParsing` hooks
    done()
  },
  preValidation: function (request, reply, done) {
    // This hook will always be executed after the shared `preValidation` hooks
    done()
  },
  preHandler: function (request, reply, done) {
    // This hook will always be executed after the shared `preHandler` hooks
    done()
  },
  // // Example with an array. All hooks support this syntax.
  //
  // preHandler: [function (request, reply, done) {
  //   // This hook will always be executed after the shared `preHandler` hooks
  //   done()
  // }],
  preSerialization: (request, reply, payload, done) => {
    // This hook will always be executed after the shared `preSerialization` hooks
    done(null, payload)
  },
  onSend: (request, reply, payload, done) => {
    // This hook will always be executed after the shared `onSend` hooks
    done(null, payload)
  },
  onTimeout: (request, reply, done) => {
    // This hook will always be executed after the shared `onTimeout` hooks
    done()
  },
  onError: (request, reply, error, done) => {
    // This hook will always be executed after the shared `onError` hooks
    done()
  },
  handler: function (request, reply) {
    reply.send({ hello: 'world' })
  }
})
```


