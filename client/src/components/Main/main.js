import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

import useStyles from './styles.js';
import Appbar from '../Appbar/appbar';
import Leftmenu from '../Menu/Leftmenu/menu';
import Rightmenu from '../Menu/Rightmenu/menu';
import Wall from '../Wall/Wall/wall';

import { getPosts } from '../../api/posts';

const Main = () => {
  const classes = useStyles();
  const [ posts,setPosts ] = useState('');

  useEffect( () => {
    async function fetchPosts(){
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  },[])

  return(
    <div>
      <Appbar />
      <Leftmenu />
      <Rightmenu />
      <Container className={classes.Container}>
        <Wall posts={posts}/>
      </Container>
    </div>
  )
};

export default Main;
