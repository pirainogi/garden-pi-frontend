import React from 'react';
import { connect } from 'react-redux';

const PlantCard = () => {

    return(
      <div>
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
