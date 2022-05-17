const mysql = require('mysql2')
let dbUrl = process.env.DB_URL
class VideoList {
      
    async get(request, response) {
        const connection = await mysql.createConnection(process.env.DB_URL)
        await connection.connect()
        connection.query('SELECT * FROM videos ORDER BY name', function (err, rows, fields) {
            if (err) {
                response.send({status: 500, message: 'Data Access Error', error: err})
            } else {
                response.send({status: 200, message: 'ok', rows})
            }
          })
    }
}
module.exports = VideoList