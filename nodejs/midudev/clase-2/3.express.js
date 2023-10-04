const express = require('express')
const ditto = require('./pokemon/ditto.json')

const port = process.env.PORT ?? 3000

const app = express()
app.disable('x-powered-by')
app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   // Solo llega request que son POST y que tienen el header Content-type: application/json
//   let body = ''
//   req.on('data', chunk => {
//     body += chunk
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  req.body.timestamp = Date.now()
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))
