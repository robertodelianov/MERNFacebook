import express from 'express';

import { createUser, loginUser } from '../controllers/users.js';

const usersRouter = express.Router();

usersRouter.post("/register", createUser);
usersRouter.post("/login", loginUser);

export default usersRouter;
