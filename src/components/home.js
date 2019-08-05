import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/actions'

import '../css/home.css'
import Footer from './footer'

class Home extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending the login fetch from home');
    this.props.loginUser(this.state)
    this.props.history.push('/profile')
  }

  render(){
    return(
      <div>
        <div className="home-container">
          <div className="tophalf">

            <form onSubmit={this.handleSubmit} className="loginForm">
              <input type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"/>
              <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"/>
              <input type="submit" value="Login" className="button"/>
            </form>

            <p>Forgot Password?</p>
            <h1> Join the Garden Pi</h1>
            <h3> TAGLINE TAGLINE TAGLINE </h3>
          </div>
          <div className="bottomhalf">
            <div className='link-row'>
              <NavLink to="/login" activeClassName="active" id="navlink" className='home-links'>Login</NavLink>
              <NavLink to="/signup" activeClassName="active" className='home-links' id="navlink">Signup</NavLink>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  console.log('home state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(withRouter(Home));
