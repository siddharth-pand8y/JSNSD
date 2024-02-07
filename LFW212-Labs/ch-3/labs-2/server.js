const fastify = require("fastify")({ logger: true });


fastify.get('/', async (req, res) => {
    res.status(200);
    return;
})

fastify.post('/', (req, res) => {
    res.status(405);
    res.send('');
    return;
})

fastify.listen({
    port: process.env.PORT || 3000
}).catch(e => {
    fastify.log.error(e);
    process.exit(1);
})
