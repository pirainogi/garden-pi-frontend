import React from 'react';
import '../css/plantCard.css';

const PlantCard = (props) => {
  // console.log(props);
    return(
      <div className="plantCard">
        {props.plant
          ? <div>
            <span>{props.plant.name}</span><br></br>
            <span>Species:{props.plant.species_id}</span>
          </div>
          : <span>Plant Card</span>
        }
      </div>
    )

} // end of class

export default PlantCard;
