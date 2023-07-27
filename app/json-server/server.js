const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/api/auth/login', (req, res, next) => {
  const body = req.body;
  const {password, ...other} = router.db.__wrapped__.users.find(user => user.username === body.username && user.password === body.password )
  if(!other) return  res.status(403).send("User not found.");
  res.status(200).json(JSON.stringify({...other}));
})


server.use((req, res, next) => {
  if (!!req.headers.authorization) { // add your authorization logic here
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
})

server.get('/api/users/myself', (req, res, next) => {
  const { id, username } = JSON.parse(req.headers.authorization.split(" ")[1]);
  const {password, ...user} = router.db.__wrapped__.users.find(user => user.username === username && user.id === id )
  if(!user) return  res.status(403).send("User not found.");
  res.status(200).json(user);
})

server.get('/posts', (req, res) => {
  res.jsonp(req.query)
})

// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   next()
// })

// Use default router
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})