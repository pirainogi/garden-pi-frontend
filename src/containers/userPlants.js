import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantCard from '../components/plantCard'

class UserPlants extends Component {

  createPlant = () => {
    console.log('clicking the create plant button');
  }

  render(){
    console.log('user info render', this.props);
    return(
      <div>
        <h1>I am the User's Plants </h1>
        <button onClick={this.createPlant}>Create a New Plant (I do nothing yet)</button>
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
