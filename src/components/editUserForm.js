import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import * as actions from '../actions/actions';
import '../css/editUserForm.css';

class EditUserForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('sending the edit user fetch');
    this.props.editUser(this.state)
  }

  render(){
    // console.log('edit user', 'state:', this.state, "props:", this.props);
    return(
      <div className="editUserForm">
        <h1>I am the Edit User Form (I do nootthinnggggg)</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="New Name" onChange={this.handleChange} value={this.state.name}/>
            <input type="text" name="email" placeholder="New Email" onChange={this.handleChange} value={this.state.email}/>
            <input type="password" name="password" placeholder="Confirm Password" onChange={this.handleChange} value={this.state.password}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  // console.log('app state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(EditUserForm);
