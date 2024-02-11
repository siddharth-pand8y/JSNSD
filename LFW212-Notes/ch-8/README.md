## replyFrom

`npm i @fastify/reply-from` -

This package can be used to setup to resolves the response from the upstream URL

- The second argument passed to reply.from is the options object. It contains an onResponse function. This function usage requires us to manually end the response (with **`reply.send`**)

- ```js
  onResponse(request, reply, res)
  ```

  The request & reply objects are for the route handler and a third argument res, which represents the response form the upstream service. This is the same core **http.Incomingmessage** object that's passed to the callback of an **http.request** call

-

## Async Generators

Ref:[for await...of - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of#Iterating_over_async_generators)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of#Iterating_over_async_generators)

---

## Http-Proxy

- The @fastify/http-proxy uses @fastify/reply-from plugin under the hood with a handler that takes all the requests, figures out the path and then passes them reply.from

- `preHandler` option can be used supported by @fastify/http-proxy to implement custom logics (for e.g. Authentication)

-
