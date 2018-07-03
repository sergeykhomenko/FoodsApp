// Libs
import express from 'express';
import bodyParser from 'body-parser';

import * as db from './server/utils/DatabaseUtils';

// API connect
import MainAPIRouter from './server/api';


db.setupConnection();

const app = express();
app.use( bodyParser.json() );

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