import express from 'express';
import { Request, Response } from 'express';
import { Application } from 'express';

import login from '../controller/AuthController/login';

const loginRoute = (app: Application) => {
    app.post('/login', login);
}

export default loginRoute;