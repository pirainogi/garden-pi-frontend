import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { testAction } from './actions/testAction';

import './App.css';
import Home from './components/home';
import Login from './containers/login';
import Signup from './containers/signup'


const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction())
})

class App extends Component {

  testAction = (e) => {
    this.props.testAction()
  }

  render(){
    return (
      <div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    );
  }

}

function mapStateToProps(state){
  console.log('map state to props', state);
  return {...state.testReducer}
}

export default connect(null, null)(App);
