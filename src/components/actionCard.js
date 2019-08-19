import React from 'react';
import '../css/actionCard.css'

const ActionCard = (props) => {

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
