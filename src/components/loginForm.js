import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
      <div className="loginForm">
        <span className='login-title'>Login to the Garden Party</span>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="email" className='login-input' placeholder='Email' onChange={this.handleChange} value={this.state.email}/>
            <input type="password" name="password" className='login-input' placeholder='Password' onChange={this.handleChange} value={this.state.password}/>
          <input type="submit" value="Login" className='login-submit'/>
        </form>
        <div className='bottombox'></div>
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
