"use strict";

const { bicycle } = require("../../model");
const { promisify } = require("util");
const read = promisify(bicycle.read);
const create = promisify(bicycle.create);
const update = promisify(bicycle.update);
const { uid } = bicycle;

async function getBicycle(fastify, opts) {
  const { notFound } = fastify.httpErrors;

  fastify.post(
    "/",
    {
      schema: {
        body: {
          type: "object",
          required: ["data"],
          additionalProperties: false,
          properties: {
            data: {
              type: "object",
              required: ["brand", "color"],
              additionalProperties: false,
              properties: {
                brand: {
                  type: "string",
                },
                color: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
    async (request, reply) => {
      const { data } = request.body;
      const id = uid();
      await create(id, data);
      reply.code(201);
      return { id };
    }
  );

  fastify.post("/:id/update", async (request, reply) => {
    const { id } = request.params;
    const { data } = request.body;

    try {
      await update(id, data);
      reply.code(204);
    } catch (err) {
      if (err.message === "not found") throw notFound();
      throw err;
    }
  });

  fastify.put("/:id", async (request, reply) => {
    const { id } = request.params;
    const { data } = request.body;
    try {
      await create(id, data);
      reply.code(201);
      return {};
    } catch (err) {
      if (err.message === "resource exists") {
        await update(id, data);
        reply.code(204);
      } else {
        throw err;
      }
    }
  });

  fastify.get("/:id", async (request, reply) => {
    const { id } = request.params;
    try {
      return await read(id);
    } catch (err) {
      if (err.message === "not found") throw notFound();
      throw err;
    }
  });
}

module.exports = getBicycle;
