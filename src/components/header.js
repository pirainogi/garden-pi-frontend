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

  let navToggle = () => {
    let links = document.querySelector('.narrowLinks')
    if(links.style.display === 'block'){
      links.style.display = 'none';
    } else {
      links.style.display = 'block';
    }
  }

  return(
    <div className="header">
      <div className="navWide">
        <div className="wideDiv">
          <h4>Logo</h4>
          <h4>About</h4>
          <h4>My Plants</h4>
          <h4>Profile</h4>
          <button onClick={() => loggingOut()}>logout</button>
        </div>
      </div>
      <div className="navNarrow">
        <p onClick={() => navToggle()}>icon</p>
        <div className="narrowLinks">
          <h4>Logo</h4>
          <h4>About</h4>
          <h4>My Plants</h4>
          <h4>Profile</h4>
          <button onClick={() => loggingOut()}>logout</button>
        </div>
      </div>
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
