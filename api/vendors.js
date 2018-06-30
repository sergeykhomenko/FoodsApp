import express from 'express';

let APIVendorRouter = express.Router();

APIVendorRouter.get('/', (req, res) => {
    res.send('Vendors');
});

APIVendorRouter.get('/:id', (req, res) => {
    res.send(`ID: ${req.params.id}`);
});

export default APIVendorRouter;