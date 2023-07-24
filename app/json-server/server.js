const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use((req, res, next) => {
  if (!!req.headers.authorization) { // add your authorization logic here
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
})

server.get('/posts', (req, res) => {
  res.jsonp(req.query)
})

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

// Use default router
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})