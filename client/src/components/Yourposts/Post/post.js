import React, { useState } from 'react';
import { Card, CardMedia, CardHeader, CardActions, Button, CardContent, Typography, TextField } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import PublishIcon from '@material-ui/icons/Publish';

import useStyles from './styles';
import { deletePost, updatePost } from '../../../api/userposts';

const Post = ({ post, deleteMyPost }) => {
  const classes = useStyles();
  const [ edit,setEdit ] = useState(false);
  const [ commentDefault,setCommentDefault ] = useState(post.comment);

  const handleDelete = () => {
    deletePost({
      id: post._id
    });
    deleteMyPost(post._id)
  }

  const handleEdit = () => {
    if(edit === false){
      setEdit(true)
    }else{
      updatePost({
        id: post._id, comment: commentDefault,
      })
      setEdit(false)
    }
  }

  return(
    <Card>
      <CardHeader
        title='Posted by'
        subheader={<span className={classes.ByYouPost}>YOU</span>}
        className={classes.Colors}
        />
      <CardMedia title={post.title} image={post.imageFile} className={classes.Media}/>
      <CardContent>
        { (edit === true)
          ? <form>
              <TextField variant='filled' InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}}
                value={commentDefault} onChange={ (e) => setCommentDefault(e.target.value)}/>
            </form>
          : <Typography>{commentDefault}</Typography>}
      </CardContent>
      <CardActions className={classes.Colors}>
        <Button variant='contained' color='secondary' onClick={handleDelete}>
          <DeleteForeverIcon /> DELETE
        </Button>
        <Button variant='outlined' color='secondary'>{post.like} likes</Button>
        { (edit === true)
          ? <Button variant='contained' style={{ backgroundColor: 'green', color: 'white'}} onClick={handleEdit}>
              <PublishIcon /> CONFIRM
            </Button>
          : <Button variant='contained' color='secondary' onClick={handleEdit}>
              <EditIcon /> EDIT
            </Button>}
      </CardActions>
    </Card>
  )
};

export default Post;
