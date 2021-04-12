import express from 'express';

import { addPost, getPosts, likePost } from '../controllers/posts.js';

const postsRouter = express.Router();

postsRouter.get('/', getPosts);
postsRouter.post('/createPost', addPost);
postsRouter.patch('/likePost', likePost);

export default postsRouter;
