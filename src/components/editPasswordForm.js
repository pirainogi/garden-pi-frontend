import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class EditPasswordForm extends Component {

  state = {
    new_password: '',
    matching_password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending the edit user fetch');
    if(this.state.new_password === this.state.matching_password){
      this.props.editPassword(this.state.new_password)
    } else {
      alert(`Your new passwords don't match! Try again.`)
    }
  }

  render(){
    // console.log('edit user', 'state:', this.state, "props:", this.props);
    return(
      <div className="editUserForm">
        <h1>Edit PW Form (I also do nootthinnggggg)</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="password" name="new_password" placeholder="New Password" onChange={this.handleChange} value={this.state.new_password}/>
            <input type="password" name="matching_password" placeholder="Matching Password" onChange={this.handleChange} value={this.state.matching_password}/>
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

export default connect(mapStateToProps, actions)(EditPasswordForm);
