import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/home.css'
import Footer from './footer'

const Home = () => {

  return(
    <div>
      <div className="container">
        <div className="tophalf">

          <form className="loginForm">
            <input type="username" name="username" value={null} placeholder="Username"/>
            <input type="password" name="password" value={null} placeholder="Password"/>
            <input type="submit" value="Login" className="button"/>
          </form>

          <p>Forgot Password?</p>
          <h1> Join the Garden Party</h1>
          <h3> TAGLINE TAGLINE TAGLINE </h3>
        </div>
        <div className="bottomhalf">
          <NavLink to="/login" activeClassName="active" id="navlink">Login</NavLink>
          <NavLink to="/signup" activeClassName="active" id="navlink">Signup</NavLink>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
