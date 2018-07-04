import express from 'express';
import * as db from '../utils/DatabaseUtils';

let APIUsersRouter = express.Router();

APIUsersRouter.get('/', (req, res) => {
    db.User.getUserList().then(data => res.send(data));
});

APIUsersRouter.post('/', (req, res) => {
    db.User.create(req.body).then(data => res.send(data));
});

APIUsersRouter.get('/:id', (req, res) => {
    db.User.getUser(req.params.id).then(data => res.send(data));
});

export default APIUsersRouter;