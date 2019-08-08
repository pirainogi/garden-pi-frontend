import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions/actions'
import { loginAction } from './actions/actions';

import './App.css';
import Home from './components/home';
import Login from './containers/login';
import Signup from './containers/signup'
import Profile from './containers/profile'
import Garden from './containers/garden'

class App extends Component {

  componentDidMount(){
    this.props.autoLogin()
    this.props.history.push('/profile')
  }

  render(){
    return (
      <div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/profile' component={Profile} />
          <Route path='/garden' component={Garden} />
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    );
  }

} // end of app component

const mapStateToProps = state => {
  console.log('app.js state', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(withRouter(App));
