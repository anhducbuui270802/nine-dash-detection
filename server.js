const app = require("./app");
const http = require("http");
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);

const PORT  = process.env.PUBLISH_PORT;

global._io = io;

const onConnection = (socket) => {
    registerHandlers(io, socket);
};

(async function () {
    app.use((req, res, next) => {
        res.io = io;
        next();
    });

    io.on('connection', (socket) => {
        console.log('Client connected');
    
        socket.on('disconnected', () => {
            console.log('Client disconnected');
        });

        socket.on('progress', (progress) => {
            socket.broadcast.emit('progress', progress);
        })
    })

    server.listen(PORT, () => console.log(`App are listening at ${PORT}`));
})();


