import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantCard from '../components/plantCard';
import '../css/userPlants.css';

class UserPlants extends Component {

  createPlant = () => {
    console.log('clicking the create plant button');
  }

  render(){
    console.log('user info render', this.props);
    return(
      <div className="userPlants">
        <div className='user-plant-title'>
          <span>My Plants</span>
        </div>
        <div className='create-plant-row'>
          <button className='create-plant-btn' onClick={this.createPlant}>Create New Plant</button>
        </div>
        <PlantCard />
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  console.log(`user's plants`, state);
  return {
    state
  }
}

export default connect(mapStateToProps)(UserPlants);
