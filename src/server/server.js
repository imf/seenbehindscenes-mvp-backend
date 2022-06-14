require('dotenv').config()
const VideoList = require('./controllers/videoList')
const videoList = new VideoList()
require ('./controllers/videos')

const fastify = require('fastify')({
  logger: true
})

fastify.register(require('@fastify/postgres'), {
  connectionString: process.env.DATABASE_URL + '?ssl=true'
})

fastify.get('/', (request, reply) => {
  reply.send({ status: 200, message: 'ok' })
})
fastify.get('/oldVideos', async (request, reply) => {videoList.get(request, reply)})

let port = process.env.PORT || 3000

fastify.listen({port, host: '0.0.0.0'}, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})




const GET_ALL='SELECT id, name, description, thumbnail_url, video_url, duration, created_at FROM videos ORDER BY created_at;'
const GET_ONE='SELECT id, name, description, thumbnail_url, video_url, duration, created_at FROM videos WHERE id=$1;'

fastify.get('/videos', (req, reply) => {
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

fastify.get('/viideos/:id', (req, reply) => {
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