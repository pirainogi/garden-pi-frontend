import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'

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
  }

  render(){
    console.log('login form component state', this.state, this.props);
    return(
      <div>
        <h1>I am the Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
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

export default connect(mapStateToProps, actions)(LoginForm);
