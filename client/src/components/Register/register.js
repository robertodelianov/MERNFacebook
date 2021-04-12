import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

import useStyles from './styles';
import { createUser } from '../../api/index';

const Register = () => {
  const classes = useStyles();
  const [ username,setUsername ] = useState('');
  const [ email,setEmail ] = useState('');
  const [ password,setPassword ] = useState('');
  const [ password2,setPassword2 ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      username, email, password, password2
    });
    setUsername('')
    setEmail('');
    setPassword('');
    setPassword2('');
  }

  return(
    <Grid container className={classes.Container}>
      <Grid item sm={10} md={5} lg={3}>
        <form className={classes.Form} onSubmit={handleSubmit}>
          <TextField variant='filled' color='primary' label="Username" className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} value={username} onChange={ (e) => setUsername(e.target.value) } />
          <TextField variant='filled' color='primary' label="Email" className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} value={email} onChange={ (e) => setEmail(e.target.value) } />
          <TextField type='password' variant='filled' color='primary' label="Password" className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} value={password} onChange={ (e) => setPassword(e.target.value) } />
          <TextField type='password' variant='filled' color='primary' label="Confirm password" className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} value={password2} onChange={ (e) => setPassword2(e.target.value) } />
          <Button type='submit' variant='contained' color='primary' size='large' className={classes.FormElements}>CREATE ACCOUNT</Button>
          <Typography className={classes.FormElements}>You already have an account? <Link to='/login'><Button variant='contained' color='secondary'>LOG IN</Button></Link></Typography>
        </form>
      </Grid>
    </Grid>
  )
};

export default Register;
