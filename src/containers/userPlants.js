import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantCard from '../components/plantCard';
import '../css/userPlants.css';

class UserPlants extends Component {

  createPlant = () => {
    console.log('clicking the create plant button');
  }

  renderPlants = () => {
    if (this.props.state.currentUser) {
      return this.props.state.currentUser.groups.map(group => {
        return group.plants.map(plant => {
          // console.log(plant);
          return <PlantCard key={plant.id} plant={plant}/>
        })
      })
    }
  }

  render(){
    // console.log('user info render', this.props.state.currentUser);
    return(
      <div className="userPlants">
        <div className='user-plant-title'>
          <span>My Plants</span>
        </div>
        <div className='create-plant-row'>
          <button className='create-plant-btn' onClick={this.createPlant}>Create New Plant</button>
        </div>
        <div className='plant-card-container'>
        {this.renderPlants()}
        </div>
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  // console.log(`user's plants`, state);
  return {
    state
  }
}

export default connect(mapStateToProps)(UserPlants);
