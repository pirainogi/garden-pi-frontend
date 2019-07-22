import React, { Component } from 'react';

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
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <h1>I am the Login Form</h1>
        <form>
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

export default LoginForm;
