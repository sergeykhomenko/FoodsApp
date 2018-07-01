// Libs
import express from 'express';

// Routers
import APIVendorRouter from './api/vendors';
import APIUsersRouter from './api/users';

// Api realize
let MainAPIRouter = express.Router();
MainAPIRouter.use('/vendors', APIVendorRouter);
MainAPIRouter.use('/users/', APIUsersRouter);

export default MainAPIRouter;