import mongoose from 'mongoose';

import PostModel from '../models/Post.js';

export const getPosts = async (req, res) => {
  const { username } = req.query;
  const filter = { username };

  try {
    const data = await PostModel.find(filter);

    res.json(data);
  } catch (e) {
      if(e) throw e;
  }

};

export const deletePost = async(req, res) => {
  const { id } = req.body;

  try {
    await PostModel.findOneAndRemove({ _id: new mongoose.Types.ObjectId(id)})

  } catch (e) {
      if(e) throw e;
  }
};

export const updatePost = async (req, res) => {
  const { id, comment } = req.body;


  try {
    await PostModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, {comment})

  } catch (e) {
      if(e) throw e;
  }

};
