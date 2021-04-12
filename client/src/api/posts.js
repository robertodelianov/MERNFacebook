import axios from 'axios';

export const createPost = (newPost) => axios.post('/posts/createPost', newPost);

export const getPosts = async () => {
  try {
    const { data } = await axios.get('/posts');

    return data;
  } catch (e) {
    if(e) throw e;
  }
};

export const likePost = async (data) => {
  await axios({
    method: 'PATCH',
    url: '/posts/likePost',
    data: data,
  });
};
