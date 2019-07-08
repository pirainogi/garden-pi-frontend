import React, { Component } from 'react';
import { connect } from 'react-redux'
import { testAction } from './actions/testAction'

import logo from './logo.svg';
import './App.css';

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction())
})

class App extends Component {

  testAction = (e) => {
    this.props.testAction()
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <pre>
          {JSON.stringify(this.props)}
        </pre>
          <button onClick={this.testAction}>Test</button>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
