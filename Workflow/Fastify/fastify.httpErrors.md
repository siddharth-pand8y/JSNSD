# `fastify.httpErrors`

[Ref: https://github.com/fastify/fastify-sensible#fastifyhttperrors](https://github.com/fastify/fastify-sensible#fastifyhttperrors)

* Object that exposes `createError` and all of the `4xx` and `5xx` error constructors.

* Use of `4xx` and `5xx` error constructors follows the same structure as [`new createError[code || name]([msg]))`](https://github.com/jshttp/http-errors#new-createerrorcode--namemsg) in [http-errors](https://github.com/jshttp/http-errors):

`4xx` Errors

* `fastify.httpErrors.**badRequest()**`
* `fastify.httpErrors.**unauthorized()**`
* `fastify.httpErrors.**paymentRequired()**`
* `fastify.httpErrors.**forbidden()**`
* `fastify.httpErrors.**notFound()**`
* `fastify.httpErrors.**methodNotAllowed()**`
* `fastify.httpErrors.**notAcceptable()**`
* `fastify.httpErrors.**proxyAuthenticationRequired()**`
* `fastify.httpErrors.**requestTimeout()**`
* `fastify.httpErrors.**conflict()**`
* `fastify.httpErrors.**gone()**`
* `fastify.httpErrors.**lengthRequired()**`
* `fastify.httpErrors.**preconditionFailed()**`
* `fastify.httpErrors.**payloadTooLarge()**`
* `fastify.httpErrors.**uriTooLong()**`
* `fastify.httpErrors.**unsupportedMediaType()**`
* `fastify.httpErrors.**rangeNotSatisfiable()**`
* `fastify.httpErrors.**expectationFailed()**`
* `fastify.httpErrors.**imateapot()**`
* `fastify.httpErrors.**misdirectedRequest()**`
* `fastify.httpErrors.**unprocessableEntity()**`
* `fastify.httpErrors.**locked()**`
* `fastify.httpErrors.**failedDependency()**`
* `fastify.httpErrors.**tooEarly()**`
* `fastify.httpErrors.**upgradeRequired()**`
* `fastify.httpErrors.**preconditionRequired()**`
* `fastify.httpErrors.**tooManyRequests()**`
* `fastify.httpErrors.**requestHeaderFieldsTooLarge()**`
* `fastify.httpErrors.**unavailableForLegalReasons()**`

`5xx` Errors

* `fastify.httpErrors.**internalServerError()**`
* `fastify.httpErrors.**notImplemented()**`
* `fastify.httpErrors.**badGateway()**`
* `fastify.httpErrors.**serviceUnavailable()**`
* `fastify.httpErrors.**gatewayTimeout()**`
* `fastify.httpErrors.**httpVersionNotSupported()**`
* `fastify.httpErrors.**variantAlsoNegotiates()**`
* `fastify.httpErrors.**insufficientStorage()**`
* `fastify.httpErrors.**loopDetected()**`
* `fastify.httpErrors.**bandwidthLimitExceeded()**`
* `fastify.httpErrors.**notExtended()**`
* `fastify.httpErrors.**networkAuthenticationRequired()**`

#### `reply.[httpError]`
