require("dotenv").config();
const express = require("express");
const parseReq = require("./config/request.config");
const routerhome = require("./route/home.route");
// const routeNineDash = require("./route/nine-dash.route");
const morgan = require("morgan");
const notfound = require("./route/404");
const viewEngine = require("./config/engine.config");
// const video = require("./route/nine-dash-video.route");
const cors = require("cors");
const compression = require("compression");

app = express();
app.use(
    compression({
        level: 9,
        threshold: 100,
    }),
);
app.use(cors());
app.use(viewEngine);
app.use(morgan("dev"));
app.use(parseReq);
app.use(routerhome);
// app.use(video);
// app.use(routeNineDash);
app.use(notfound);

module.exports = app;


// const http = require('http');
// require('dotenv').config();

// const hostname = process.env.HOSTNAME;
// const port = process.env.PORT;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });