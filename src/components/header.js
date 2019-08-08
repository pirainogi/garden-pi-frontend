import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

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
          <NavLink to='/about' activeClassName='active'>About</NavLink>
          <h4>My Plants</h4>
          <h4>Profile</h4>
          <button onClick={() => loggingOut()}>logout</button>
        </div>
      </div>
      <div className="navNarrow">
        <img src="https://img.icons8.com/android/24/000000/menu.png" alt="menu icon" onClick={() => navToggle()}></img>
        <div className="narrowLinks">
          <ul>
            <li><NavLink to='/about' activeClassName='active' className='link'>About</NavLink></li>
            <li><NavLink to='/garden' activeClassName='active' className='link'>My Plants</NavLink></li>
            <li><NavLink to='/profile' activeClassName='active' className='link'>Profile</NavLink></li>
            <li><button className='link' onClick={() => loggingOut()}>logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log('header state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(withRouter(Header));
