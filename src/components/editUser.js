import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditUserForm from '../components/editUserForm';
import EditPasswordForm from '../components/editPasswordForm';

import '../css/editUser.css'

class EditUser extends Component {

  editUser = () => {
    console.log('click clack edit a user');
  }

  editPassword = () => {
    console.log('click clack edit pw');
  }

  render(){
    console.log('edit user render', this.props);
    return(
      <div className="editUser">
        <button className="edit-user-btn" onClick={this.editUser}>click me to edit user</button>
        <button className="edit-pw-btn" onClick={this.editPassword}>click me to edit pw</button>
        <EditUserForm />
        <EditPasswordForm />
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  // console.log('user info', state);
  return {
    state
  }
}

export default connect(mapStateToProps)(EditUser);
