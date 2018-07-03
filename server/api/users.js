import express from 'express';
import * as db from '../utils/DatabaseUtils';

let APIUsersRouter = express.Router();

APIUsersRouter.get('/', (req, res) => {
    db.listUsers().then(data => res.send(data));
});

APIUsersRouter.post('/', (req, res) => {
    db.createUser(req.body).then(data => res.send(data));
});

APIUsersRouter.get('/:id', (req, res) => {
    res.send(req.params.id);
});

export default APIUsersRouter;