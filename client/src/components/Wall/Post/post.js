import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import useStyles from './styles';
import { likePost } from '../../../api/posts';

const Post = ({ post }) => {
  const classes = useStyles();
  const [ liked,setLiked ] = useState(false);
  const [ makeLike,setMakeLike ] = useState(post.like);

  useEffect( () => {
    const likes = () => {
      post.users.forEach( (like) => {
        if(like.username === localStorage.jwtName){
          setLiked(true);
        }
      })
    }
    likes();
  }, [])

  const handleLike = () => {
    if(liked === false){
      likePost({
        id: post._id, username: localStorage.jwtName, like: post.like
      })
      setLiked(true);
      setMakeLike(post.like + 1)
    }
  };

  return(
    <Card>
      <CardHeader title='Posted by' subheader={(post.username === localStorage.jwtName) ? <span className={classes.ByYouPost}>YOU</span> : post.username} />
      <CardMedia title={post.title} image={post.imageFile} className={classes.Media} />
      <CardContent>
        <Typography className={classes.Comment}>{post.comment}</Typography>
      </CardContent>
      <CardActions>
        { (liked === false)
          ? <Button variant='outlined' color='secondary' size='large' className={classes.LikeButton} onClick={handleLike}>
          <ThumbUpAltIcon />{post.like} LIKE</Button>
          : <Button variant='contained' color='secondary' size='large' className={classes.LikeButton}>
          <ThumbUpAltIcon />{makeLike} LIKE</Button>}
      </CardActions>
    </Card>
  )
};

export default Post;
