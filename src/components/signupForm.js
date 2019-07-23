import React, { Component } from 'react';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    matching_password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending the fetch');
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:
        JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <h1>I am the Signup Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name (First and Last):
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          </label>
          <label>
            Retype Password:
            <input type="password" name="matching_password" onChange={this.handleChange} value={this.state.matching_password}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}//end of class

export default SignupForm;
