const fastify = require('fastify')()

fastify.register(require('@fastify/postgres'), {
  connectionString: process.env.DATABASE_URL
})

const GET_ALL='SELECT id, name, description, thumbnail_url, video_url, duration, created_at FROM videos ORDER BY created_at;'
const GET_ONE='SELECT id, name, description, thumbnail_url, video_url, duration, created_at FROM videos WHERE id=$1;'

fastify.get('/newVideos', (req, reply) => {
  fastify.pg.connect(onConnect)

  function onConnect (err, client, release) {
    if (err) return reply.send(err)

    client.query(
      GET_ALL, [],
      function onResult (err, result) {
        release()
        reply.send(err || result)
      }
    )
  }
})

fastify.get('/newVideos/:id', (req, reply) => {
  fastify.pg.connect(onConnect)

  function onConnect (err, client, release) {
    if (err) return reply.send(err)

    client.query(
      GET_ONE, [req.params.id],
      function onResult (err, result) {
        release()
        reply.send(err || result)
      }
    )
  }
})