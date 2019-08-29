import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import * as api from '../services/api'

import '../css/plantCard.css';

class PlantCard extends Component {

  state = {
    species: ''
  }

  componentDidMount() {
    if (this.props.plant) {
      api.getOneSpecies(this.props.plant.species_id)
        .then(data => {
          this.setState({
            species: data.scientific_name
          })
        })
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div className="plantCard" onClick={() => this.props.renderCurrentPlantView(this.props.plant)}>
        {this.props.plant
          ? <div>
            <FontAwesomeIcon icon={faLeaf} size='1x' color={'rgb(150, 171, 108)'} />
            <span className='plantName'> {this.props.plant.name}</span><br></br>
            <span>Species: {this.state.species}</span><br></br>
          </div>
          : <span>Plant Card</span>
        }
      </div>
    )
  }

} // end of class

export default PlantCard;
