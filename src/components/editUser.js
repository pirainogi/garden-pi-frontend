import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditUserForm from '../components/editUserForm';

class EditUser extends Component {

  editUser = () => {
    console.log('click clack edit a user');
  }

  render(){
    console.log('edit user render', this.props);
    return(
      <div>
        <h1>Do you want to edit your profile? </h1>
        <button onClick={this.editUser}>click me to edit (all I do is console.log)</button>
        <EditUserForm />
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  console.log('user info', state);
  return {
    state
  }
}

export default connect(mapStateToProps)(EditUser);
