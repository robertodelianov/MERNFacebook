import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles';
import Post from '../Post/post';

const Wall = ({ posts }) => {
  const classes = useStyles();

  return(
    <Grid container direction='column'>
      {(posts)
        ? posts.map( (data) => (
        <Grid item xs={12} key={data._id} className={classes.Container}>
          <Post post={data} />
        </Grid>
      ))
      : <CircularProgress size={'10rem'} className={classes.CircularProgress}/>}
    </Grid>
  )
};

export default Wall;
