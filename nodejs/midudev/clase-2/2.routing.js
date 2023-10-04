const http = require('node:http')

// commonjs → modelo clasico de mode
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default: {
          res.statusCode = 404
          res.setHeader('Content-type', 'text/html; charset=utf-8')
          res.end('<h1>404</h1>')
        }
      }
      break
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          // escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            // Llamar una DB para guardar la info
            res.writeHead(201, { 'Content-type': 'application/json; chatset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-type', 'text/html; charset=utf-8')
          res.end('<h1>404</h1>')
        }
      }
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => console.log('Server listening on port http://localhost:3000'))
