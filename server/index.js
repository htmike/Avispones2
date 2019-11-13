
const electron = require('electron')
const { app, BrowserWindow, Menu } = require('electron')
var path = require('path')

const fs = require('file-system')
var bodyParser = require('body-parser')

const express = require('express')
const server = express()

server.use(bodyParser.json({limit: '50mb'}))
server.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))
server.use(express.static('dist/avispones2'))

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
server.get('/timer', (req, res, next) => {
    res.status(200)
    const filePath = './server/timer.json'
    if ( fs.fs.existsSync(filePath) ) {
        const timer = fs.readFileSync(filePath, 'utf-8')
        res.end(timer)
    } else {
        res.end('Error al consultar timer')
    }
    next()
})
server.post('/timer', (req, res, next) => {
    res.status(200)
    const timer = JSON.stringify(req.body)
    console.log(timer)
    const filePath = './server/timer.json'
    fs.writeFileSync(filePath, timer)
    next()
    res.end()
})


server.listen(PORT, () => {
    console.log('Works at ' + PORT)
})

// App

electron.app.on('browser-window-created', (e,window) => {
    let menu = new Menu();
    window.setMenuBarVisibility(false);
});

let win;

function createWindow() {
    win = new BrowserWindow({
        fullscreenable: true,
        width: 384,
        height: 500,
        backgroundColor: '#111',
        icon: path.join(__dirname, 'assets/logo.png')
    });
    win.loadURL('http://localhost:7373/')
    win.setMenuBarVisibility(false)
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});
app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
