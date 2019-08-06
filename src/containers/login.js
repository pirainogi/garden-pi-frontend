import React from 'react';
import Header from '../components/header';
import LoginForm from '../components/loginForm';
import '../css/login.css';

const Login = () => {

  return(
    <div className="login">
      <Header />
      <h1>I am the Login Page</h1>
      <LoginForm />
    </div>
  )
}

export default Login;
