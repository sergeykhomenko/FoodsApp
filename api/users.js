import express from 'express';

let APIUsersRouter = express.Router();

APIUsersRouter.get('/:id', (req, res) => {
    res.send(req.params.id);
});

export default APIUsersRouter;