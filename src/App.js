import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions/actions'

import './App.css';
import Home from './components/home';
import Login from './containers/login';
import Signup from './containers/signup'
import Profile from './containers/profile'
import Garden from './containers/garden'
import About from './components/about'

class App extends Component {

  componentDidMount(){
    // console.log('hitting the component did mount');
    this.props.autoLogin()
    this.props.grabActions()
  }

  // componentDidUpdate(){
  //   // if(!!this.props.state.currentUser && window.location.pathname === '/' || window.location.pathname === '/login' || window.location.pathname === '/signup'){
  //   //   this.props.history.push('/profile')
  //   // }
  // }

  render(){
    // console.log('app', this.props);
    return (
      <div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/profile' component={Profile} />
          <Route path='/garden' component={Garden} />
          <Route path='/about' component={About} />
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    );
  }

} // end of app component

const mapStateToProps = state => {
  // console.log('app.js state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(withRouter(App));
