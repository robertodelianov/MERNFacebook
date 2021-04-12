import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { createBrowserHistory } from 'history';

import setAuthToken from '../Auth/setAuthToken';

const authentication = {
  user: {}
};

export const createUser = (newUser) => {
  axios.post('/users/register', newUser)
    .then( (res) => {
      if(res.status !== 200){
        if(res.data.username === undefined) res.data.username = '';
        if(res.data.email === undefined) res.data.email = '';
        if(res.data.password === undefined) res.data.password = '';
        if(res.data.password2 === undefined) res.data.password2 = '';
        alert(`${res.data.username}\n${res.data.email}\n${res.data.password}\n${res.data.password2}`)
      }else if(res.status === 200){
        alert('Successfull registration !');
        createBrowserHistory().push('/login');
        window.location.reload();
      }
    } )
};

export const getUser = (user) => {
  axios.post('/users/login', user)
    .then( (res) => {
      if(res.status !== 200){
        if(res.data.email === undefined) res.data.email = '';
        if(res.data.password === undefined) res.data.password = '';
        alert(`${res.data.email}\n${res.data.password}`)
      }else if(res.status === 200){
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        authentication.user = decoded;
        localStorage.setItem('jwtName', authentication.user.username);
        createBrowserHistory().push('/main');
        window.location.reload();
        console.log(localStorage)
      }
    })
};

export const logOut = () => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  authentication.user = {};
  createBrowserHistory().push('/login');
  window.location.reload();
}

export default authentication;
