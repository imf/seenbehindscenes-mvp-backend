require('dotenv').config()
const VideoList = require('./controllers/videoList')
const videoList = new VideoList()

const fastify = require('fastify')({
  logger: true
})
fastify.get('/', (request, reply) => {
  reply.send({ status: 200, message: 'ok' })
})
fastify.get('/videos', async (request, reply) => {videoList.get(request, reply)})

let port = process.env.PORT || 3000

fastify.listen(port, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})




