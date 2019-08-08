import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import * as actions from '../actions/actions'
import '../css/loginForm.css';


class LoginForm extends Component {

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
    console.log('sending the login fetch');
    this.props.loginUser(this.state)
    this.props.history.push('/profile')
  }

  render(){
    // console.log('login form component state', 'state:', this.state, "props:", this.props);
    return(
      <div>
        <div className="loginForm">
          <div className='login-title'>
            <span>Login to the Garden Party</span>
          </div>
          <form onSubmit={this.handleSubmit}>
              <div className='login-input'>
              <input type="text" name="email"  placeholder='Email' onChange={this.handleChange} value={this.state.email}/>
              <input type="password" name="password"  placeholder='Password' onChange={this.handleChange} value={this.state.password}/>
              </div>
            // <input type="submit" value="Login" className='login-submit'/>
          </form>
        </div>
        <div className='bottombox'>
        <NavLink to="/signup" activeClassName="active" className='signup-link' id="navlink">New to Garden Party? Signup now</NavLink>
        </div>
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  console.log('app state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(withRouter(LoginForm));
