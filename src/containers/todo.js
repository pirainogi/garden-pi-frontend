import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionCard from '../components/actionCard';
import '../css/todo.css';

class ToDo extends Component {

  renderActionCards = () => {
    this.props.state.actions.map(action => {
      return (
        <ActionCard
          key={action.id}
          action={action}
        />
      )
    })
  }

  render(){
    console.log('going to make some action cards', this.props.state.actions);
    return(
      <div className="todo">
        {this.props.state.actions
          ? renderActionCards()
          : <ActionCard />
            <ActionCard />
            <ActionCard />
            <ActionCard />
            <ActionCard />
            <ActionCard />
            <ActionCard />
            <ActionCard />
            <ActionCard />
            <ActionCard />
        }
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
