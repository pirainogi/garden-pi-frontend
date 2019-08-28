import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import '../css/home.css'
import Footer from './footer'

class Home extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending the login fetch from home');
    this.props.loginUser(this.state)
    this.props.history.push('/profile')
  }

  render(){
    return(
      <div>
        <div className="home-container">
          <div className="tophalf">
            <h1> Join the Garden Party <FontAwesomeIcon icon={faLeaf} size='1x' color={'white'}/></h1>
            <h3> TAGLINE TAGLINE TAGLINE </h3>
          </div>
          <div className="bottomhalf">
            <div className='link-row'>
              <NavLink to="/login" activeClassName="active" id="navlink" className='home-links'>Login</NavLink>
              <NavLink to="/signup" activeClassName="active" className='home-links' id="navlink">Signup</NavLink>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  console.log('home state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(withRouter(Home));
