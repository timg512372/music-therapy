const { createServer } = require('http');
const express = require('express');

const next = require('next');
const admin = require('firebase-admin');
const serviceAccount = require('./firebasekeys.json');

const app = next({
    dev: process.env.NODE_ENV === 'development'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

const firebase = admin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://music-therapy-c96cc.firebaseio.com'
    },
    'server'
);

app.prepare().then(() => {
    const server = express();

    server.use((req, res, next) => {
        req.firebaseServer = firebase;
        next();
    });

    server.get('*', (req, res) => {
        return handler(req, res);
    });

    server.listen(3004, err => {
        if (err) throw err;
        console.log('Ready on http://localhost:3004 (with a custom server)');
    });
});
