import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import '../css/editUserForm.css';

class CreatePlantForm extends Component {

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

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/species')
    .then(res => res.json())
    .then(data =>
      this.setState({
        species: data
      })
    )
  }

  // createGroups = () => {
  //   if(this.state.groups.length > 0 ) {
  //     let options = this.state.groups.map(group => {
  //     return <option value={group.name}>
  //     {group.name}
  //     </option>
  //     })
  //     console.log(options);
  //   }
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('sending the edit user fetch');
    this.props.createPlant(this.state)
    this.props.toggleModal()
  }

  render(){
    return(
      <div className="createPlantForm">
        <h1>make new plant one day</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/><br></br>
            <input type="integer" name="humidity_max" placeholder="Humidity Max" onChange={this.handleChange} value={this.state.humidity_max}/><br></br>
            <input type="integer" name="humidity_min" placeholder="Humidity Min" onChange={this.handleChange} value={this.state.humidity_min}/><br></br>
            <input type="integer" name="ph_max" placeholder="Ph Max" onChange={this.handleChange} value={this.state.ph_max}/><br></br>
            <input type="integer" name="ph_min" placeholder="Ph Min" onChange={this.handleChange} value={this.state.ph_min}/><br></br>
            <input type="integer" name="soil_moisture_max" placeholder="Soil Moisture Max" onChange={this.handleChange} value={this.state.soil_moisture_max}/><br></br>
            <input type="integer" name="soil_moisture_min" placeholder="Soil Moisture Min" onChange={this.handleChange} value={this.state.soil_moisture_min}/><br></br>
            <input type="integer" name="temperature_min" placeholder="Temperature Min" onChange={this.handleChange} value={this.state.temperature_min}/><br></br>
            <select value={this.state.group_id} onChange={this.handleChange} name="group_id">
            {this.createGroups()}
            </select>
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

export default connect(mapStateToProps, actions)(CreatePlantForm);
