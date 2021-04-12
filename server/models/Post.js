import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  imageFile: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  },
  users: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const PostModel = mongoose.model('posts', PostSchema);

export default PostModel;
