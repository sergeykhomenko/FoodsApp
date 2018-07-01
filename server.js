// Libs
import express from 'express';
import mongoose from 'mongoose';

// Config
import * as cfg from './config.json';
const dbFullHostname = `${cfg.db.protocol}://${cfg.db.login}:${cfg.db.password}@${cfg.db.host}`;
mongoose.connect(`${dbFullHostname}/${cfg.db.databaseName}?retryWrites=true`);

// API connect
import MainAPIRouter from './api';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/api', MainAPIRouter );

/*
 * vendors
 * foods
 * customers
 * employers
 *
 *
 */

app.listen(8080, () => {
    console.log('App started on http://localhost:8080/');
});