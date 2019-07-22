import React from 'react';
import '../css/home.css'

const Home = () => {

  return(
    <div className="container">
      <div className="tophalf">

        <form className="loginForm">
          <input type="username" name="username" value={null} placeholder="Username"/>
          <input type="password" name="password" value={null} placeholder="Password"/>
          <input type="submit" value="Login" className="button"/>
        </form>

        <p>Forgot Password?</p>
        <h1> Join the Garden Party</h1>
        <h3> TAGLINE TAGLINE TAGLINE</h3>
      </div>
      <div className="bottomhalf">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  )
}

export default Home;
