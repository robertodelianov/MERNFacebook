import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';

import usersRouter from './routes/usersRoutes.js';
import myPassport from './passport.js';

import postsRouter from './routes/postsRoutes.js';

import userpostsRouter from './routes/userpostsRoutes.js';

import { CONN } from './config.js';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());

mongoose.connect(CONN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then( () => console.log('Successfull connected to MONGO !'))
  .catch( err => console.log(err));

app.use(passport.initialize());
app.use("/users", usersRouter);

app.use("/posts", postsRouter);

app.use("/user", userpostsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} !`);
});
