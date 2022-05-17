const mysql = require('mysql2')
const GET_ALL = 'SELECT BIN_TO_UUID(id) AS id, name, description, thumbnail_url, video_url, duration, created_at FROM videos ORDER BY created_at;'

class VideoList {
    async get(request, response) {
        const connection = await mysql.createConnection(process.env.DB_URL)
        await connection.connect()
        connection.query(GET_ALL, function (err, rows, fields) {
            if (err) {
                response.send({status: 500, message: 'Data Access Error', error: err})
            } else {
                response.send({status: 200, message: 'ok', rows})
            }
          })
    }
}
module.exports = VideoList

