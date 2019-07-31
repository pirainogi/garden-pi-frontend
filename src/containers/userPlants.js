import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPlants extends Component {

  render(){
    console.log('user info render', this.props);
    return(
      <div>
        <h1>I am the User's Plants </h1>
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
