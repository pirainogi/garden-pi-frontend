import React from 'react';
import { connect } from 'react-redux';
import '../css/plantCard.css';

const PlantCard = () => {

    return(
      <div className="plantCard">
        <span>Plant Name</span>
      </div>
    )

} // end of class

const mapStateToProps = (state) => {
  // console.log('user info', state);
  return {
    state
  }
}

export default connect(mapStateToProps)(PlantCard);
