import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import * as api from '../services/api'
import '../css/form.css';

import Select from './form/select'
import MultiRange from './form/multiRange'

class CreatePlantForm extends Component {

  state = {
    groups: [],
    species: [],
    formData: {
      name: '',
      species_id: 0,
      group_id: 0,
      humidity_min: 0,
      humidity_max: 100,
      ph_min: 0,
      ph_max: 14,
      soil_moisture_min: 0,
      soil_moisture_max: 0,
      temperature_min: 0
    }
  }

  componentDidMount() {
    Promise.all([
      api.getSpecies(),
      api.getGroups()
    ])
      .then(([species, groups]) => this.setState({ groups, species }))
  }

  handleSpeciesChange = e => {
    api.getOneSpecies(e.target.value).then(speciesData => {
      this.setState({
        species_id: speciesData.id,
        humidity_min: speciesData.humidity_min || this.state.formData.humidity_min,
        humidity_max: speciesData.humidity_max || this.state.formData.humidity_max,
        ph_min: speciesData.ph_min || this.state.formData.ph_min,
        ph_max: speciesData.ph_max || this.state.formData.ph_max,
        soil_moisture_min: speciesData.soil_moisture_min || this.state.formData.soil_moisture_min,
        soil_moisture_max: speciesData.soil_moisture_max || this.state.formData.soil_moisture_max,
        temperature_min: speciesData.temperature_min || this.state.formData.temperature_min
      })
    })
    this.handleChange(e)
  }

  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('sending the edit user fetch');
    this.props.createPlant(this.state.formData)
    this.props.toggleModal()
  }

  getSpeciesOptions = () => {
    const defaultOption = {
      key: 0,
      value: 0,
      text: "Select species..."
    }
    const speciesOptions = this.state.species.map(specie => ({
      key: specie.id,
      value: specie.id,
      text: specie.common_name ? `${specie.common_name} (${specie.scientific_name})` : specie.scientific_name
    }))
    return [defaultOption, ...speciesOptions]
  }

  getGroupOptions = () => {
    const defaultOption = {
      key: 0,
      value: 0,
      text: "Select group..."
    }
    const groupOptions = this.state.groups.map(group => ({
      key: group.id,
      value: group.id,
      text: group.name
    }))
    return [defaultOption, ...groupOptions]
  }

  render() {
    return (
      <div className="form">
        <h1>make new plant one day</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form__field">
            <label htmlFor="name">Plant Name</label>
            <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.formData.name} />
          </div>
          <div className="form__field">
            <label htmlFor="name">Plant Species</label>
            <Select value={this.state.formData.species_id} onChange={this.handleSpeciesChange} name="species_id" options={this.getSpeciesOptions()} />
          </div>
          <div className="form__field">
            <label htmlFor="name">Plant Group</label>
            <Select value={this.state.formData.group_id} onChange={this.handleChange} name="group_id" options={this.getGroupOptions()} />
          </div>
          <div className="form__field">
            <label htmlFor="name">Humidity Min/Max</label>
            <MultiRange
              min={0}
              max={100}
              step={1}
              minValue={this.state.formData.humidity_min}
              minName="humidity_min"
              onMinChange={this.handleChange}
              maxValue={this.state.formData.humidity_max}
              maxName="humidity_max"
              onMaxChange={this.handleChange}
            />
          </div>
          <div className="form__field">
            <label htmlFor="ph_min">PH Min/Max</label>
            <MultiRange
              min={0}
              max={14}
              step={0.1}
              minValue={this.state.formData.ph_min}
              minName="ph_min"
              onMinChange={this.handleChange}
              maxValue={this.state.formData.ph_max}
              maxName="ph_max"
              onMaxChange={this.handleChange}
            />
          </div>
          <div className="form__field">
            <label htmlFor="temperature_min">Temperature Min</label>
            <input type="number" name="temperature_min" placeholder="Temperature Min" onChange={this.handleChange} value={this.state.formData.temperature_min} />
          </div>
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
