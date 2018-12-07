// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')
// //create the express app
// const app = express()
// //create middleware to handle the serving the app
// app.get('/', serveStatic (path.join(__dirname, '/Newspaper-Project')))
// //serve index by default
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/Newspaper-Project/index.html')
// })
// // Create default port to serve the app on
// const port = process.env.PORT || 5000
// app.listen(port)
// // Log to feedback that this is actually running
// console.log('server started on port ' + port)

'use strict';

const express = require('express'),
    serveStatic = require('serve-static'),
    path = require('path');

// Instantiate Express App
const app = express();

// Middleware
app.use('/', serveStatic(path.join(__dirname, '/Newspaper-Project')));

// Serve Index
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Newspaper-Project/index.html');
});

// Port
const port = process.env.PORT || 5000;

// Start Server
app.listen(port, () => {
    console.log(`Server start on port ${port}...`);
});