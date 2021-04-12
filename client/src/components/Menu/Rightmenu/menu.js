import React from 'react';
import { Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Rightmenu = () => {
  const classes = useStyles();

  return(
    <Paper className={classes.LeftMenu}>
      <Link to='/yourposts'>
        <Button variant='contained' color='secondary' fullWidth className={classes.Buttons}>YOUR POSTS</Button>
      </Link>
    </Paper>
  )
};

export default Rightmenu;
