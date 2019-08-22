import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    this.props.toggleModal()
  }

  render(){
    return(
      <div className="editUserForm">
        <h1>Edit Your User Information</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="New Name" onChange={this.handleChange} value={this.state.name}/><br></br>
            <input type="text" name="email" placeholder="New Email" onChange={this.handleChange} value={this.state.email}/><br></br>
            <input type="password" name="password" placeholder="Confirm Password" onChange={this.handleChange} value={this.state.password}/><br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(EditUserForm);
