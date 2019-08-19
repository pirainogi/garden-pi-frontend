import React from 'react';
// import { connect } from 'react-redux';
import '../css/actionCard.css'

const ActionCard = (props) => {
    // console.log(props)
    return(
      <div className="actionCard">
        {props.action
          ? <span>{props.action.action_type}</span>
          : <span>action card </span>
        }
      </div>
    )

} // end of class

export default ActionCard;
