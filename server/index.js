const express = require('express')
const server = express()

const fs = require('file-system')
var bodyParser = require('body-parser')

server.use(bodyParser.json({limit: '50mb'}))
server.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))

const PORT = 7373

server.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH')
    res.setHeader('Access-Control-Allow-Headers', 'X-Request-With, content-type')
    next()
  })

server.get('/score/:id', (req, res, next) => {
    res.status(200)
    const id = req.params.id
    const filePath = './server/score-' + id + '.json'
    if ( fs.fs.existsSync(filePath) ) {
        const score = fs.readFileSync(filePath, 'utf-8')
        res.end(score)
    } else {
        res.end('Error al consultar score')
    }
    next();
})
server.post('/score/:id', (req, res, next) => {
    res.status(200)
    const id = req.params.id
    const score = JSON.stringify(req.body)
    const filePath = './server/score-' + id + '.json'
    fs.writeFileSync(filePath, score)
    console.log(score)
    res.end()
    next()
})
server.get('/data', (req, res, next) => {
    res.status(200)
    const filePath = './server/data.json'
    if ( fs.fs.existsSync(filePath) ) {
        const score = fs.readFileSync(filePath, 'utf-8')
        res.end(score)
    } else {
        res.end('Error al consultar score')
    }
    next();
})
server.post('/data', (req, res, next) => {
    res.status(200)
    const score = JSON.stringify(req.body)
    const filePath = './server/data.json'
    fs.writeFileSync(filePath, score)
    console.log(score)
    next()
    res.end()
})

server.listen(PORT, () => {
    console.log('Works at ' + PORT)
})
