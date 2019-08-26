import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import '../css/editUserForm.css';

class DeletePlantForm extends Component {

  state = {
    confirm: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('sending the edit user fetch');
    // this.props.editUser(this.state)
    this.props.toggleModal(null)
  }

  render(){
    return(
      <div className="deletePlantForm">
        <h1>delete plant one day</h1>
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(DeletePlantForm);
