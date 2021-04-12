import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { Container, Grid, Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import Appbar from '../Appbar/appbar';
import Leftmenu from '../Menu/Leftmenu/menu';
import Rightmenu from '../Menu/Rightmenu/menu';

import { createPost } from '../../api/posts.js';

const CreatePostForm = () => {
  const classes = useStyles();
  const [ title,setTitle ] = useState('');
  const [ comment,setComment ] = useState('');
  const [ imageFile,setImageFile ] = useState('');
  const [ like,setLike ] = useState(0);

  const handleAddPost = (e) => {
    e.preventDefault();
    if(imageFile !== ''){
      createPost({
        username: localStorage.jwtName, title, comment, imageFile, like
      })
    setTitle('');
    setComment('');
    setImageFile('');
    setLike(0);
  }else alert('Image is required !')
  }

  return(
    <div>
      <Appbar />
      <Leftmenu />
      <Rightmenu />
      <Container maxWidth='md' className={classes.Container}>
      <Grid container direction='column' spacing={4}>
        <Grid item xs={12}>
          <Link to='/main'>
            <Button variant='outlined' color='primary' size='large' fullWidth>BACK TO HOME</Button>
          </Link>
        </Grid>
        <Grid item xs={12} className={classes.FormContainer}>
          <form className={classes.Form} onSubmit={handleAddPost}>
            <Typography className={classes.Title}>CREATING A POST</Typography>
            <TextField required variant='filled' label='Title' className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} value={title} onChange={ (e) => setTitle(e.target.value)}  />
            <TextField required variant='filled' label='Comment' multiline rowsMax={4} className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} value={comment} onChange={ (e) => setComment(e.target.value)}  />
            <FileBase64 type='file' required multiple={false} className={classes.FormElements} onDone={({base64}) => setImageFile(base64) } />
            <Button type='submit' variant='outlined' color='primary' className={classes.FormElements}>ADD POST</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
    </div>
  )
};

export default CreatePostForm;
