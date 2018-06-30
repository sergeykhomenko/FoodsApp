// Libs
import express from 'express';

// Routers
import APIVendorRouter from './api/vendors';

// Api realize
let MainAPIRouter = express.Router();
MainAPIRouter.use('/vendors', APIVendorRouter);

export default MainAPIRouter;