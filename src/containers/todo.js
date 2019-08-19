import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionCard from '../components/actionCard';
import '../css/todo.css';

class ToDo extends Component {

  renderActionCards = () => {
    return this.props.state.actions.map(action => {
      return (
        <ActionCard
          key={action.id}
          action={action}
        />
      )
    })
  }

  render(){
    return(
      <div>
      <div className="todo">
        {this.props.state.actions
          ? this.renderActionCards()
          : null
        }
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('user info', state);
  return {
    state
  }
}

export default connect(mapStateToProps)(ToDo);
