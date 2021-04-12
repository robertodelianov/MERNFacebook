import React, { useState, useEffect } from 'react';
import { Container, Grid, Button, CircularProgress, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import Appbar from '../../Appbar/appbar';
import Post from '../Post/post';

import { getPosts } from '../../../api/userposts';

const Posts = () => {
  const classes = useStyles();
  const [ posts,setPosts ] = useState('');

  useEffect( () => {
    async function fetchPosts(){
      const data = await getPosts({
        username: localStorage.jwtName
      });
      setPosts(data.data);
    }
    fetchPosts();
  }, [])

  const deleteMyPost = (id) => {
    const index = posts.findIndex( (user) => user._id === id );

    if(index !== -1){
      const data = posts.splice(index,1)[0];
      setPosts(data);
    }
  }

  return(
    <div>
      <Appbar />
      <Container maxWidth='lg'>
        <Link to='/main'>
          <Button variant='contained' color='primary' fullWidth size='large' className={classes.ButtonBack}>BACK TO WALL</Button>
        </Link>
        <Grid container spacing={5} className={classes.Container}>
          { (posts.length > 0)
            ? posts.map( (data) => (
              <Grid item xs={6} key={data._id}>
                <Post post={data} deleteMyPost={deleteMyPost}/>
              </Grid>
            ))
          : (
            <div>
              <CircularProgress size={'10rem'} className={classes.CircularProgress}/>
              <Typography variant='body4' className={classes.DontHaveAPost}>If you don't have a posts, Do you want to create one ? Just click the button !
                <Link to='/form'>
                  <Button variant='contained' color='primary' size='large' className={classes.CreatePostButton}>CREATE POST</Button>
                </Link>
              </Typography>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  )
};

export default Posts;
