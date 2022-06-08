import express from 'express';
import http from 'http';
import path from 'path';

// App.Set
app.set('views', path.join(__dirname, 'app.views'));
app.set('view engine', 'hbs');

// Node.js Middleware


// Main App
var app = express(),
    port;

app.use(cors)


http.createServer(app).listen(port);