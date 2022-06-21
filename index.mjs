import express from 'express';
import http from 'http';
import path from 'path';
const User_Router = require('./app/routes/UserRouter.mjs');
const Word_Router = require('./app/routes/WordRouter.mjs');

// App.Set
app.set('views', path.join(__dirname, 'app.views'));
app.set('view engine', 'hbs');

// Node.js Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(compression({ threshold: 0 }));
app.use(morgan('tiny'));
app.use(cors());

app.use('/user', User_Router);
app.use('/word', Word_Router);

// Main App
var app = express(),
    port;


http.createServer(app).listen(port);
