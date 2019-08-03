import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../actions/actions'
import '../css/header.css';


const Header = (props) => {

  let loggingOut = () => {
    console.log('logging out', props);
    props.logoutUser()
    props.history.push('/')
  }

  return(
    <div className="header">
      <h4> I am the Header</h4>
      <button onClick={() => loggingOut()}>logout</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('header state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(withRouter(Header));
