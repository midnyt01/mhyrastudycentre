const http = require('http')
const { Server } = require('socket.io')
const app = require('./app')
const { getSellerId } = require('./helper-function/helper-functions')
const {mysqlConnect} = require('./services/mysql')

const PORT = 8005;


const server = http.createServer(app)



async function startServer () {
    await mysqlConnect()
    
    server.listen(PORT, () => {
        console.log(`server is now listening to port ${PORT}`)
    })
}

startServer()

