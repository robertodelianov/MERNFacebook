import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import { getUser } from '../../api/index';

const Login = () => {
  const classes = useStyles();
  const [ email,setEmail ] = useState('');
  const [ password,setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser({
      email, password
    })
    setEmail('');
    setPassword('');
  }

  return (
    <Grid container className={classes.Container}>
      <Grid item sm={10} md={5} lg={3}>
        <form className={classes.Form} onSubmit={handleSubmit}>
          <TextField variant='filled' color='secondary' label='email' className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} value={email} onChange={ (e) => setEmail(e.target.value) } />
          <TextField type='password' variant='filled' color='secondary' label='password' className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} value={password} onChange={ (e) => setPassword(e.target.value) } />
          <Button type='submit' variant='contained' color='secondary' size='large' className={classes.FormElements} >LOGIN</Button>
          <Typography>You don't have an account? <Link to='/'><Button variant='contained' color='primary'>CREATE ACCOUNT</Button></Link></Typography>
        </form>
      </Grid>
    </Grid>
  )
};

export default Login;
