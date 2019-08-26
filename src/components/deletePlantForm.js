import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import '../css/editUserForm.css';

class DeletePlantForm extends Component {

  state = {
    groups: [],
    species: [],
    name: '',
    species_id: '',
    group_id: '',
    humidity_min: '',
    humidity_max: '',
    ph_min: '',
    ph_max: '',
    soil_moisture_min: '',
    soil_moisture_max: '',
    temperature_min: ''
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
