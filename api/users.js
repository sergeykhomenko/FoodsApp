import express from 'express';

let APIUsersRouter = express.Router();

APIUsersRouter.get('/:id', (req, res) => {
    res.send(req.params.id);
});

APIUsersRouter.post('/new', (req, res) => {
    res.send({status: 999, message: 'Method is not ready'})
});

export default APIUsersRouter;