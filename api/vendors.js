import express from 'express';
import mongoose from 'mongoose';

let APIVendorRouter = express.Router();

mongoose.connect(`mongodb+srv://<LOGIN>@foodsapp-vkvko.mongodb.net/test?retryWrites=true`)

APIVendorRouter.get('/', (req, res) => {
    res.send('Vendors');
});

APIVendorRouter.get('/:id', (req, res) => {
    res.send(`ID: ${req.params.id}`);
});

export default APIVendorRouter;