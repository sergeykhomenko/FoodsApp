import express from 'express';

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