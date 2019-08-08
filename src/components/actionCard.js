import React from 'react';
import { connect } from 'react-redux';
import '../css/actionCard.css'

const ActionCard = () => {

    return(
      <div className="actionCard">
        <span>action card </span>
      </div>
    )

} // end of class

const mapStateToProps = (state) => {
  console.log('user info', state);
  return {
    state
  }
}

export default connect(mapStateToProps)(ActionCard);
