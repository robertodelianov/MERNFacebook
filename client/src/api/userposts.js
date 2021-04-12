import axios from 'axios';

export const getPosts = async (user) => {

  try {

    const data =  await axios({
      method: 'GET',
      url: '/user/userposts',
      params: user,
    });

    return data;

  } catch (e) {
      if(e) throw e;
  }

};

export const deletePost = async (post) => {

   try {
    await axios({
      method: 'DELETE',
      url: '/user/deletePost',
      data: post,
    })
   } catch (e) {
     if(e) throw e;
   }

};

export const updatePost = async (id) => {

  try {
    await axios({
      method: 'PATCH',
      url: 'user/updatePost',
      data: id,
    })
  } catch (e) {
      if(e) throw e;
  }

};
