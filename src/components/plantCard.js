import React from 'react';
import { connect } from 'react-redux';
import '../css/plantCard.css';

const PlantCard = () => {

    return(
      <div className="plantCard"> 
        <h1>I am a plant I am a card </h1>
      </div>
    )

} // end of class

const mapStateToProps = (state) => {
  console.log('user info', state);
  return {
    state
  }
}

export default connect(mapStateToProps)(PlantCard);
