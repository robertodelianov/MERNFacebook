import express from 'express';

import { getPosts, deletePost, updatePost } from '../controllers/userposts.js';

const userpostsRouter = express.Router();

userpostsRouter.get('/userposts', getPosts);
userpostsRouter.delete('/deletePost', deletePost);
userpostsRouter.patch('/updatePost', updatePost);

export default userpostsRouter;
