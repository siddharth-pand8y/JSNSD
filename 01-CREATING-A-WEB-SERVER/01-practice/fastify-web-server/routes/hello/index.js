"use strict";
const fs = require("node:fs");

const hello = fs.readFileSync("routes/hello/hello.html", "utf-8");

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    reply.type("text/html");
    return hello;
  });
};
