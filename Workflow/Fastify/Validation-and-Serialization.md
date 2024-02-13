# Validation & Serialization

```js
fastify.addSchema({
  $id: 'http://example.com/',
  type: 'object',
  properties: {
    hello: { type: 'string' }
  }
})

fastify.post('/', {
  handler () {},
  schema: {
    body: {
      type: 'array',
      items: { $ref: 'http://example.com#/properties/hello' }
    }
  }
})
```

The shared schema can be used using `$ref` schema. 



## Overview of how references work

| Reference                                                     | Use Cases |
| ------------------------------------------------------------- | --------- |
| `myField: { $ref: '#foo'}`                                    |           |
| `myField: { $ref: '#/definitions/foo'}`                       |           |
| `myField: { $ref: 'http://url.com/sh.json#'}`                 |           |
| `myField: { $ref: 'http://url.com/sh.json#/definitions/foo'}` |           |
| `myField: { $ref: 'http://url.com/sh.json#foo'}`              |           |



#### Retrieving the shared schemas

```js

```



# Validation

The supported validations are:

* `body`: validates the body of the request if it is a POST, PUT, or PATCH method.
* `querystring` or `query`: validates the query string.
* `params`: validates the route params.
* `headers`: validates the request headers.

* * * * * * 





In route options, under schema we alos have an additional `response` sections to filter and generate a schema for the response, which throws 500 if the response of the api does not match the schema

```js
const res = {
    response : {
        200: {
            type: object,
            properties: { id: {type: 'integer'}, message: {type: 'string'}

            }
    }
}
```



@fastify/response-validation

Ref: https://github.com/fastify/fastify-response-validation#fastifyresponse-validation

`npm i @fastify/response-validation`
