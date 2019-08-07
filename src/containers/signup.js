import React from 'react';
import Header from '../components/header';
import SignupForm from '../components/signupForm';
import '../css/signup.css';

const Signup = () => {

  return(
    <div className="signup">
      <Header />
      <SignupForm />
    </div>
  )
}

export default Signup;
