import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInfo extends Component {

  render(){
    console.log('user info render', this.props.state);
    return(
      <div>
        <h1>I am the User Info </h1>
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  console.log('user info', state);
  return {
    state
  }
}

export default connect(mapStateToProps)(UserInfo);
