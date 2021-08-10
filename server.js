const express = require('express')
const app = express()

server.listen(3000)

const io = require('socket.io')(server)


io.on('connection', client => {
  client.on('event', data => { /* ... */ })
  client.on('disconnect', () => { /* ... */ })
})








