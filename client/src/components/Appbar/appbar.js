import React from 'react';
import { AppBar, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import { logOut } from '../../api/index';

const Appbar = () => {
  const classes = useStyles();

  const title = '<';
  const title2 = '> MER';

  const handleLogOut = () => {
    logOut();
  }

  return(
    <div className={classes.Container}>
      <AppBar position='static' color='primary' className={classes.Appbar}>
        <Typography className={classes.Title}><span className={classes.TitleEffects}>{title}</span><span>{title2}</span><span className={classes.TitleEffects}>N</span></Typography>
      </AppBar>
      <AppBar position='static' color='inherit' className={classes.Appbar2}>
        <Typography><span className={classes.TitleEffects2}>Welcome, </span><span className={classes.Title2}>{localStorage.jwtName}</span></Typography>
        <Button variant='contained' color='secondary' className={classes.ExitButton} onClick={handleLogOut}>EXIT</Button>
      </AppBar>
    </div>
  )
};

export default Appbar;
