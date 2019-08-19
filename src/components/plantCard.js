import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import '../css/plantCard.css';

const PlantCard = (props) => {
  // console.log(props);
    return(
      <div className="plantCard">
        {props.plant
          ? <div>
            <span>{props.plant.name}</span><br></br>
            <span>Species:{props.plant.species_id}</span><br></br>
            <FontAwesomeIcon icon={faLeaf} size='3x' color={'rgb(150, 171, 108)'}/>
          </div>
          : <span>Plant Card</span>
        }
      </div>
    )

} // end of class

export default PlantCard;
