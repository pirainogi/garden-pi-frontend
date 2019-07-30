import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { loginAction } from './actions/actions';

import './App.css';
import Home from './components/home';
import Login from './containers/login';
import Signup from './containers/signup'
import Profile from './containers/profile'

class App extends Component {


  render(){
    return (
      <div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/profile' component={Profile} />
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    );
  }

} // end of app component

// const mapDispatchToProps = dispatch => ({
//   login: () => dispatch(loginAction())
// })

// const mapStateToProps = state => {
//   console.log('map state to props', state);
//   return {
//     state
//   }
// }

export default App;
