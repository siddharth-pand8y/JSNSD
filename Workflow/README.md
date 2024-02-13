`npm init fastify -- --integrate --esm --standardlint`

To add a type using jsDoc to route file or plugin instance use

`/** @type {import('fastify').FastifyPluginAsync<>} */`



Workflow

- `npx nsd-check`

- check that all the functions have `async` in fastify other they will fail to  execute

- 


