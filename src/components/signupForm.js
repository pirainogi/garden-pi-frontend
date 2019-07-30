import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'

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
    if(this.state.password === this.state.matching_password){
      this.props.signupUser(this.state)
    } else {
      alert(`Your passwords don't match! Try again.`)
    }

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

const mapStateToProps = (state) => {
  console.log('app state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(SignupForm);
