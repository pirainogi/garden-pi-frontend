import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import '../css/plantCard.css';

class PlantCard extends Component {

  state = {
    species: ''
  }

  componentDidMount(){
    if(this.props.plant){
      fetch(`http://localhost:3000/api/v1/species/${this.props.plant.species_id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          species: data.scientific_name
        })
      })
    }
  }

  render(){
    // console.log(this.props);
    return(
      <div className="plantCard" onClick={() => this.props.renderCurrentPlantView(this.props.plant)}>
        {this.props.plant
          ? <div>
            <FontAwesomeIcon icon={faLeaf} size='1x' color={'rgb(150, 171, 108)'}/>
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
