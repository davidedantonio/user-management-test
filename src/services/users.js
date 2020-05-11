'use strict'
const S = require('fluent-schema')

module.exports = async function(fastify, opts) {
  const usersCollection = fastify.mongo.db.collection('users')
  const { ObjectId } = fastify.mongo

  fastify.delete('/:id', {
    schema: {
    }
  }, async function (request, reply) {
  })

  fastify.get('/:id', {
    schema: {
    }
  }, async function (request, reply) {    
  })

  fastify.post('/', {
    schema: {
    }
  }, async function (request, reply) {
  })

  fastify.get('/all', {
    schema: {
    }
  }, async function (request, reply) {
  })
}

module.exports.autoPrefix = '/api/user'