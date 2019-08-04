import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/userInfo.css';

class UserInfo extends Component {

  render(){
    console.log('user info render', this.props);
    return(
      <div className="userInfo">
        { this.props.state.currentUser
          ? <p>this.props.state.currentUser.name</p>
          : <p>name</p>
        }
        { this.props.state.currentUser
          ? <p>this.props.state.currentUser.email</p>
          : <p>email</p>
        }
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
