import React from 'react';
import { Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Leftmenu = () => {
  const classes = useStyles();

  return(
    <Paper className={classes.LeftMenu}>
      <Link to='/form'>
        <Button variant='contained' color='secondary' fullWidth className={classes.Buttons}>CREATE POST</Button>
      </Link>
    </Paper>
  )
};

export default Leftmenu;
