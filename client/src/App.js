import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Register from './components/Register/register';
import Login from './components/Login/login';
import Main from './components/Main/main';
import CreatePostForm from './components/CreatePostForm/form';
import Posts from './components/Yourposts/Posts/posts';

import './styles.css';

const App = () => {

  return (
    <Router>
      { (localStorage.jwtToken) ? <Redirect to={'/main'}></Redirect> : null}
      { (!localStorage.jwtToken) ? <Route exact path={'/'} component={ () => <Register /> } /> : null}
      { (!localStorage.jwtToken) ? <Route path={'/login'} component={ () => <Login /> } /> : null}
      { (localStorage.jwtToken) ? <Route path={'/main'} component={ () => <Main /> } /> : null}
      { (localStorage.jwtToken) ? <Route path={'/form'} component={ () => <CreatePostForm /> } /> : null}
      { (localStorage.jwtToken) ? <Route path={'/yourposts'} component={ () => <Posts /> } /> : null}
    </Router>
  )
};

export default App;
