import mongoose from 'mongoose';

import PostModel from '../models/Post.js';

export const addPost = async (req, res) => {
  const { username, title, comment, imageFile, like } = req.body;
  
  const Post = new PostModel({
    username, title, comment, imageFile, like, users: [{ username: 'admin'}]
  });

  try {
    await Post.save();

  } catch (e) {
      if(e) throw e;
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();

    res.json(posts);
  } catch (e) {
    if(e) throw e;
  };
};

export const likePost = async (req, res) => {
  const { id, username, like } = req.body;
  console.log(username)
  try {
    const data = await PostModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, { $push: {users: {username: username}}, like: like + 1 })

  } catch (e) {
    if(e) throw e;
  }

};
